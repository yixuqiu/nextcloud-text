/**
 * @copyright Copyright (c) 2024 Max <max@nextcloud.com>
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

/**
 *
 * @param {object} state the prosemirror state
 * @param {object} state.selection - the current selection
 * @param {object} state.doc - the current doc
 */
export function linkNodeFromSelection({ selection, doc }) {
	// support for CellSelections
	const { ranges } = selection
	const from = Math.min(...ranges.map(range => range.$from.pos))
	const to = Math.max(...ranges.map(range => range.$to.pos))

	const resolved = doc.resolve(from)

	// ignore links in previews
	if (resolved.parent.type.name === 'preview') {
		return false
	}

	const node = resolved.parent.maybeChild(resolved.index())
	const nodeStart = resolved.pos - resolved.textOffset
	const nodeEnd = nodeStart + node?.nodeSize

	if (to > nodeEnd) {
		// Selection spans further than one text node
		return
	}

	return isLinkNode(node) ? node : null
}

/**
 * Determine wether the given node is a link node
 * @param {object} node - node to check
 */
function isLinkNode(node) {
	const linkMark = node?.marks.find(m => m.type.name === 'link')
	if (!linkMark) {
		return false
	}
	// Don't open link bubble for anchor links
	if (linkMark.attrs.href.startsWith('#')) {
		return false
	}
	return true
}
