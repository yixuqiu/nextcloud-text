/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { initUserAndFiles, randUser } from '../utils/index.js'

const currentUser = randUser()

const fileName = 'empty.md'

describe('Assistant', () => {
	before(() => {
		initUserAndFiles(currentUser, fileName)
	})

	beforeEach(() => {
		cy.login(currentUser)
		cy.visit('/apps/files')
	})

	it('See assistant button', () => {
		cy.isolateTest({
			sourceFile: fileName,
		})
		cy.openFile(fileName, { force: true })

		cy.getContent()
			.click({ force: true })

		cy.get('[data-cy="assistantMenu"]')
			.should('be.visible')

		cy.get('[data-cy="assistantMenu"]')
			.click()

		cy.get('.action-item__popper ul').children().should(($children) => {
			const entries = $children.find('button').map((i, el) => el.innerText).get()
			expect(entries.length).to.be.greaterThan(0)
			expect('Free prompt').to.be.oneOf(entries)
			expect('Translate').to.be.oneOf(entries)
			expect('Show assistant results').to.be.oneOf(entries)
		})
	})

	it('Send free prompt request', () => {
		cy.isolateTest({
			sourceFile: fileName,
		})
		cy.openFile(fileName, { force: true })

		cy.getContent()
			.click({ force: true })
		cy.get('[data-cy="assistantMenu"]')
			.click()
		cy.get('.action-item__popper ul li').first()
			.click()

		cy.get('.assistant-modal--content #input-prompt')
			.should('be.visible')

		cy.get('.assistant-modal--content #input-prompt')
			.type('Hello World')
		cy.get('.assistant-modal--content .submit-button')
			.click()

		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(2000)

		cy.get('.assistant-modal--content .close-button')
			.click()
		cy.get('[data-cy="assistantMenu"]')
			.click()
		cy.get('.action-item__popper ul li').last()
			.click()

		cy.get('.modal-container__content .task-list')
			.should('be.visible')
			.should('contain', 'Hello World')
	})

	it('Open translate dialog', () => {
		cy.isolateTest({
			sourceFile: fileName,
		})
		cy.openFile(fileName, { force: true })

		cy.getContent()
			.click({ force: true })
		cy.get('[data-cy="assistantMenu"]')
			.click()
		cy.get('[data-cy="open-translate"]')
			.should('be.visible')
			.click()

		cy.get('[data-cy="translate-input"]')
			.should('be.visible')
			.click()
		cy.get('[data-cy="translate-input"]')
			.should('be.visible')
			.type('Hello World')
		cy.get('[data-cy="translate-input"]')
			.should('be.focused')
	})
})
