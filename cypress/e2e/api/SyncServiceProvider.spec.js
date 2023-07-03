/*
 * @copyright Copyright (c) 2023 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
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

import { randUser } from '../../utils/index.js'
import { SyncService } from '../../../src/services/SyncService.js'
import createSyncServiceProvider from '../../../src/services/SyncServiceProvider.js'
import { Doc } from 'yjs'

const user = randUser()

describe('Sync service provider', function() {
	let fileId

	before(function() {
		cy.createUser(user)
		window.OC = {
			config: { modRewriteWorking: false },
			webroot: '',
		}
	})

	beforeEach(function() {
		cy.login(user)
		cy.prepareSessionApi()
		cy.uploadTestFile('test.md')
			.then(id => {
				fileId = id
			})
	})

	function createProvider(ydoc) {
		const syncService = new SyncService({
			serialize: () => "Serialized",
			getDocumentState: () => null,
		})
		syncService.on('opened', () => syncService.startSync())
		return createSyncServiceProvider({
			ydoc,
			syncService,
			fileId,
			initialSession: null
		})
	}

	it('creates the provider', function() {
		const source = new Doc()
		const target = new Doc()
		const sourceProvider = createProvider(source)
		const targetProvider = createProvider(target)
		const sourceMap = source.getMap()
		const targetMap = target.getMap()
		cy.intercept({ method: 'POST', url: '**/apps/text/session/push' })
			.as('push')
		cy.intercept({ method: 'POST', url: '**/apps/text/session/sync' })
			.as('sync')
		cy.wait('@push')
		cy.then(() => {
			sourceMap.set('keyA', 'valueA')
			expect(targetMap.get('keyA')).to.be.undefined
		})
		cy.wait('@sync')
		cy.wait('@sync')
		cy.wait(1000)
		cy.then(() => {
			expect(targetMap.get('keyA')).to.be.eq('valueA')
			sourceProvider.destroy()
			targetProvider.destroy()
		})
	})


})
