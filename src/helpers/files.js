/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { emit } from '@nextcloud/event-bus'
import { Header } from '@nextcloud/files'
import { imagePath } from '@nextcloud/router'
import { loadState } from '@nextcloud/initial-state'

import { getSharingToken } from './token.js'
import { openMimetypes } from './mime.js'
import RichWorkspace from '../views/RichWorkspace.vue'
import store from '../store/index.js'

const FILE_ACTION_IDENTIFIER = 'Edit with text app'

const optimalPath = function(from, to) {
	const current = from.split('/')
	const target = to.split('/')
	current.pop() // ignore filename
	while (current[0] === target[0]) {
		current.shift()
		target.shift()
		// Handle case where target is the current directory
		if (current.length === 0 && target.length === 0) {
			return '.'
		}
	}
	const relativePath = current.fill('..').concat(target)
	const absolutePath = to.split('/')
	return relativePath.length < absolutePath.length
		? relativePath.join('/')
		: to
}

const registerFileCreate = () => {
	const newFileMenuPlugin = {
		attach(menu) {
			const fileList = menu.fileList

			// only attach to main file list, public view is not supported yet
			if (fileList.id !== 'files' && fileList.id !== 'files.public') {
				return
			}

			// register the new menu entry
			menu.addMenuEntry({
				id: 'file',
				displayName: t('text', 'New text file'),
				templateName: t('text', 'New text file') + '.' + loadState('text', 'default_file_extension'),
				iconClass: 'icon-filetype-text',
				fileType: 'file',
				actionLabel: t('text', 'Create new text file'),
				actionHandler(name) {
					fileList.createFile(name).then(function(status, data) {
						const fileInfoModel = new OCA.Files.FileInfoModel(data)
						if (typeof OCA.Viewer !== 'undefined') {
							OCA.Files.fileActions.triggerAction('view', fileInfoModel, fileList)
						} else if (typeof OCA.Viewer === 'undefined') {
							OCA.Files.fileActions.triggerAction(FILE_ACTION_IDENTIFIER, fileInfoModel, fileList)
						}
					})
				},
			})
		},
	}
	OC.Plugins.register('OCA.Files.NewFileMenu', newFileMenuPlugin)
}

const registerFileActionFallback = () => {
	const sharingToken = getSharingToken()
	const filesTable = document.querySelector('#preview table.files-filestable')
	if (!sharingToken || !filesTable) {
		const ViewerRoot = document.createElement('div')
		ViewerRoot.id = 'text-viewer-fallback'
		document.body.appendChild(ViewerRoot)
		const registerAction = (mime) => OCA.Files.fileActions.register(
			mime,
			FILE_ACTION_IDENTIFIER,
			OC.PERMISSION_UPDATE | OC.PERMISSION_READ,
			imagePath('core', 'actions/rename'),
			(filename) => {
				const file = window.FileList.findFile(filename)
				Promise.all([
					import('vue'),
					import(/* webpackChunkName: "files-modal" */'./../components/PublicFilesEditor.vue'),
				]).then((imports) => {
					const path = window.FileList.getCurrentDirectory() + '/' + filename
					const Vue = imports[0].default
					Vue.prototype.t = window.t
					Vue.prototype.n = window.n
					Vue.prototype.OCA = window.OCA
					const Editor = imports[1].default
					const vm = new Vue({
						render: function(h) { // eslint-disable-line
							const self = this
							return h(Editor, {
								props: {
									fileId: file ? file.id : null,
									active: true,
									shareToken: sharingToken,
									relativePath: path,
									mimeType: file.mimetype,
								},
								on: {
									close: function() { // eslint-disable-line
										self.$destroy()
									},
								},
							})
						},
					})
					vm.$mount(ViewerRoot)
				})
			},
			t('text', 'Edit'),
		)

		for (let i = 0; i < openMimetypes.length; i++) {
			registerAction(openMimetypes[i])
			OCA.Files.fileActions.setDefault(openMimetypes[i], FILE_ACTION_IDENTIFIER)
		}
	}

}

const newRichWorkspaceFileMenuPlugin = {
	attach(menu) {
		const fileList = menu.fileList
		const descriptionFile = t('text', 'Readme') + '.' + loadState('text', 'default_file_extension')
		// only attach to main file list, public view is not supported yet
		if (fileList.id !== 'files' && fileList.id !== 'files.public') {
			return
		}

		// register the new menu entry
		menu.addMenuEntry({
			id: 'rich-workspace-init',
			displayName: t('text', 'Add description'),
			templateName: descriptionFile,
			iconClass: 'icon-rename',
			fileType: 'file',
			useInput: false,
			actionHandler() {
				return window.FileList
					.createFile(descriptionFile, { scrollTo: false, animate: false })
					.then(() => emit('Text::showRichWorkspace', { autofocus: true }))
			},
			shouldShow() {
				return !fileList.findFile(descriptionFile)
			},
		})
	},
}

const addMenuRichWorkspace = () => {
	OC.Plugins.register('OCA.Files.NewFileMenu', newRichWorkspaceFileMenuPlugin)
}

let vm = null

export const FilesWorkspaceHeader = new Header({
	id: 'workspace',
	order: 10,

	enabled(folder, view) {
		return view.id === 'files'
	},

	render(el, folder, view) {
		addMenuRichWorkspace()

		import('vue').then((module) => {
			el.id = 'files-workspace-wrapper'

			// Todo: remove this hack
			const Vue = module.default
			Vue.prototype.t = window.t
			Vue.prototype.n = window.n
			Vue.prototype.OCA = window.OCA

			const View = Vue.extend(RichWorkspace)
			vm = new View({
				propsData: {
					path: folder.path,
				},
				store,
			}).$mount(el)
		})
	},

	updated(folder, view) {
		vm.path = folder.path
	},
})

export {
	optimalPath,
	registerFileActionFallback,
	registerFileCreate,
	FILE_ACTION_IDENTIFIER,
}
