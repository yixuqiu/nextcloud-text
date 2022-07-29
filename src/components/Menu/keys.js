const isMac = (navigator.userAgent.includes('Mac'))

const MODIFIERS = {
	Mod: isMac ? 'Meta' : 'Control',
	Alt: 'Alt', // Option key, on Apple computers.
	Control: 'Control',
	Shift: 'Shift',

	// unused
	// AltGraph: 'AltGraph',
	// Meta: 'Meta', // Command key on Apple computers
}

const TRANSLATIONS = {
	[MODIFIERS.Mod]: t('text', isMac ? 'Command' : 'Control'),
	[MODIFIERS.Control]: t('text', 'Ctrl'),
	[MODIFIERS.Alt]: t('text', isMac ? 'Option' : 'Command'),
	[MODIFIERS.Shift]: t('text', 'Shift'),
}

export {
	MODIFIERS,
	TRANSLATIONS,
}
