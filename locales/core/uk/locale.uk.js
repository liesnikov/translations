/***
|Name           |UkrainianTranslationPlugin|
|Description    |Translation of TiddlyWiki into Ukrainian. Supports core up to 2.10.0 (for later versions, some bits may be missing or inaccurate)|
|<Description>  |<Переклад TiddlyWiki на українську мову. Підтримує ядро до версії 2.10.0 (в пізніших версіях може не мати певних елементів чи бути неточними)">|
|Source         |https://github.com/TiddlyWiki/translations/blob/master/locales/core/uk/locale.uk.js|
|Author         |Bohdan Liesnikov|
|Original Source|<if the translation is brought from outside https://github.com/TiddlyWiki/translations, you can mention it here>|
|Version        |0.5.3|
|Feedback       |Please comment, ask, and suggest at https://github.com/TiddlyWiki/translations/issues (and at https://groups.google.com/g/tiddlywikiclassic if you need to draw more attention)|
|License        |[[Creative Commons Attribution-ShareAlike 3.0 License|http://creativecommons.org/licenses/by-sa/3.0/]] |
|Credits        |Template updates: Yakov Litvin|
***/
//{{{
// Strings in "double quotes" should be translated; strings in 'single quotes' should be left alone

config.locale = "uk"; // W3C language tag

if (config.options.txtUserName == 'YourName') // do not translate this line, but do translate the next line
	merge(config.options, { txtUserName: "Ім'я користувача" });

merge(config.tasks, {
	// Since 2.6.3, action is not used (see 8790249); left here for backwards compatibility
	save: { text: "зберегти", tooltip: "Зберегти ваші зміни в цій TiddlyWiki", action: saveChanges },
	// Since 2.6.6, sync is not used (see e901015); left here for backwards compatibility
	sync: { text: "синхронізувати", tooltip: "Синхронізувати зміни з іншими файлами та серверами TiddlyWiki files", content: '<<sync>>' },
	importTask: { text: "імпортувати", tooltip: "Імпортувати тіддлери і плагіни з " +
		"інших файлів на серверів TiddlyWiki", content: '<<importTiddlers>>' },
	tweak: { text: "налаштувати", tooltip: "Налаштування вигляду та поведінки TiddlyWiki", content: '<<options>>' },
	upgrade: { text: "оновити", tooltip: "Оновити ядро TiddlyWiki", content: '<<upgrade>>' },
	plugins: { text: "плагіни", tooltip: "Керування встановленими плагінами", content: '<<plugins>>' }
});

// Options that can be set in the options panel and/or cookies
merge(config.optionsDesc, {
	chkAnimate: "Enable animations",
	chkAutoSave: "Automatically save changes",
	txtBackupFolder: "Name of folder to use for backups",
	chkCaseSensitiveSearch: "Case-sensitive searching",
	chkConfirmDelete: "Require confirmation before deleting tiddlers",
	txtFileSystemCharSet: "Default character set for saving changes (Firefox/Mozilla only)",
	chkForceMinorUpdate: "Don't update modifier username and date when editing tiddlers",
	chkGenerateAnRssFeed: "Generate an RSS feed when saving changes",
	chkHttpReadOnly: "Hide editing features when viewed over HTTP",
	chkIncrementalSearch: "Incremental key-by-key searching",
	chkInsertTabs: "Use the tab key to insert tab characters instead of moving between fields",
	txtMaxEditRows: "Maximum number of rows in edit boxes",
	chkOpenInNewWindow: "Open external links in a new window",
	chkPreventAsyncSaving: "Disable attempting async saving (may be needed by old plugins)",
	chkRegExpSearch: "Enable regular expressions for searches",
	chkRemoveExtraMarkers: "Replace unused transclusion markers with blanks",
	chkSaveBackups: "Keep backup file when saving changes",
	chkSaveEmptyTemplate: "Generate an empty template when saving changes",
	txtTheme: "Name of the theme to use",
	chkToggleLinks: "Clicking on links to open tiddlers causes them to close",
	txtUpgradeCoreURI: "Custom URI to download TiddlyWiki core from (when upgrading)",
	txtUserName: "Username for signing your edits"
});

merge(config.messages, {
	customConfigError: "Problems were encountered loading plugins. See PluginManager for details",
	pluginError: "Error: %0",
	pluginDisabled: "Not executed because disabled via 'systemConfigDisable' tag",
	pluginForced: "Executed because forced via 'systemConfigForce' tag",
	pluginVersionError: "Not executed because this plugin needs a newer version of TiddlyWiki",
	nothingSelected: "Nothing is selected. You must select one or more items first",
	savedSnapshotError: "It appears that this TiddlyWiki has been incorrectly saved. Please see https://classic.tiddlywiki.com/#SaveUnpredictabilities for details",
	subtitleUnknown: "(unknown)",
	undefinedTiddlerToolTip: "The tiddler '%0' doesn't yet exist",
	shadowedTiddlerToolTip: "The tiddler '%0' doesn't yet exist, but has a pre-defined shadow value",
	tiddlerLinkTooltip: "%0 - %1, %2",
	externalLinkTooltip: "External link to %0",
	noTags: "There are no tagged tiddlers",
	notFileUrlError: "You need to save this TiddlyWiki to a file before you can save changes",
	cantSaveError: "It's not possible to save changes. Possible reasons include:\n- your browser doesn't support saving (Firefox, Internet Explorer, Safari and Opera all work if properly configured)\n- the pathname to your TiddlyWiki file contains illegal characters\n- the TiddlyWiki HTML file has been moved or renamed",
	invalidFileError: "The original file '%0' does not appear to be a valid TiddlyWiki",
	backupSaved: "Backup saved",
	backupFailed: "Failed to save backup file",
	rssSaved: "RSS feed saved",
	rssFailed: "Failed to save RSS feed file",
	emptySaved: "Empty template saved",
	emptyFailed: "Failed to save empty template file",
	mainSaved: "TiddlyWiki saved",
	mainDownload: "Downloading/saving main TiddlyWiki file",
	mainDownloadManual: "RIGHT CLICK HERE to download/save main TiddlyWiki file",
	mainFailed: "Failed to save main TiddlyWiki file. Your changes have not been saved",
	macroError: "Error in macro <<%0>>",
	macroErrorDetails: "Error while executing macro <<%0>>:\n%1",
	missingMacro: "No such macro",
	overwriteWarning: "A tiddler named '%0' already exists. Choose OK to overwrite it",
	unsavedChangesWarning: "WARNING! There are unsaved changes in TiddlyWiki\n\nChoose OK to save\nChoose CANCEL to discard",
	confirmExit: "--------------------------------\n\nThere are unsaved changes in TiddlyWiki. If you continue you will lose those changes\n\n--------------------------------",
	saveInstructions: "SaveChanges",
	unsupportedTWFormat: "Unsupported TiddlyWiki format '%0'",
	tiddlerSaveError: "Error when saving tiddler '%0'",
	tiddlerLoadError: "Error when loading tiddler '%0'",
	wrongSaveFormat: "Cannot save with storage format '%0'. Using standard format for save.",
	invalidFieldName: "Invalid field name %0",
	fieldCannotBeChanged: "Field '%0' cannot be changed",
	loadingMissingTiddler: "Attempting to retrieve the tiddler '%0' from the '%1' server at:\n\n'%2' in the workspace '%3'",
	upgradeDone: "The upgrade to version %0 is now complete\n\nClick 'OK' to reload the newly upgraded TiddlyWiki",
	invalidCookie: "Invalid cookie '%0'"
});

merge(config.messages.messageClose, {
	text: "close",
	tooltip: "close this message area"
});

config.messages.backstage = {
	open: { text: "backstage", tooltip: "Open the backstage area to perform authoring and editing tasks" },
	close: { text: "close", tooltip: "Close the backstage area" },
	prompt: "backstage: ",
	decal: {
		edit: { text: "edit", tooltip: "Edit the tiddler '%0'" }
	}
};

config.messages.listView = {
	tiddlerTooltip: "Click for the full text of this tiddler",
	previewUnavailable: "(preview not available)"
};

config.messages.dates.months = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];
config.messages.dates.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
config.messages.dates.shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
config.messages.dates.shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// suffixes for dates, eg "1st","2nd","3rd"..."30th","31st"
config.messages.dates.daySuffixes = [
	"st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
	"th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
	"st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
	"st"
];
config.messages.dates.am = "am";
config.messages.dates.pm = "pm";

merge(config.messages.tiddlerPopup, {
});

merge(config.views.wikified.tag, {
	labelNoTags: "no tags",
	labelTags: "tags: ",
	openTag: "Open tag '%0'",
	tooltip: "Show tiddlers tagged with '%0'",
	openAllText: "Open all",
	openAllTooltip: "Open all of these tiddlers",
	popupNone: "No other tiddlers tagged with '%0'"
});

merge(config.views.wikified, {
	defaultText: "The tiddler '%0' doesn't yet exist. Double-click to create it",
	defaultModifier: "(missing)",
	shadowModifier: "(built-in shadow tiddler)",
	dateFormat: "DD MMM YYYY", // use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	createdPrompt: "created"
});

merge(config.views.editor, {
	tagPrompt: "Type tags separated with spaces, [[use double square brackets]] if necessary, or add existing",
	defaultText: "Type the text for '%0'"
});

merge(config.views.editor.tagChooser, {
	text: "tags",
	tooltip: "Choose existing tags to add to this tiddler",
	popupNone: "There are no tags defined",
	tagTooltip: "Add the tag '%0'"
});

merge(config.messages, {
	sizeTemplates: [
		{ unit: 1024 * 1024 * 1024, template: "%0\u00a0GB" },
		{ unit: 1024 * 1024, template: "%0\u00a0MB" },
		{ unit: 1024, template: "%0\u00a0KB" },
		{ unit: 1, template: "%0\u00a0B" }
	]
});

merge(config.macros.search, {
	label: "search",
	prompt: "Search this TiddlyWiki",
	placeholder: "",
	accessKey: "F",
	successMsg: "%0 tiddlers found matching %1",
	failureMsg: "No tiddlers found matching %0"
});

merge(config.macros.tagging, {
	label: "tagging: ",
	labelNotTag: "not tagging",
	tooltip: "List of tiddlers tagged with '%0'"
});

merge(config.macros.timeline, {
	// use this to change the date format for your locale, eg "YYYY MMM DD", do not translate the Y, M or D
	dateFormat: "DD MMM YYYY"
});

merge(config.macros.allTags, {
	tooltip: "Show tiddlers tagged with '%0'",
	noTags: "There are no tagged tiddlers"
});

config.macros.list.all.prompt = "All tiddlers in alphabetical order";
config.macros.list.missing.prompt = "Tiddlers that have links to them but are not defined";
config.macros.list.orphans.prompt = "Tiddlers that are not linked to from any other tiddlers";
config.macros.list.shadowed.prompt = "Tiddlers shadowed with default contents";
config.macros.list.touched.prompt = "Tiddlers that have been modified locally";

merge(config.macros.closeAll, {
	label: "close all",
	prompt: "Close all displayed tiddlers (except any that are being edited)"
});

merge(config.macros.permaview, {
	label: "permaview",
	prompt: "Link to an URL that retrieves all the currently displayed tiddlers"
});

merge(config.macros.saveChanges, {
	label: "save changes",
	prompt: "Save all tiddlers to create a new TiddlyWiki",
	accessKey: "S"
});

merge(config.macros.newTiddler, {
	label: "new tiddler",
	prompt: "Create a new tiddler",
	title: "New Tiddler",
	accessKey: "N"
});

merge(config.macros.newJournal, {
	label: "new journal",
	prompt: "Create a new tiddler from the current date and time",
	accessKey: "J"
});

merge(config.macros.options, {
	wizardTitle: "Tweak advanced options",
	step1Title: "These options are saved in cookies in your browser",
	step1Html: "<input type='hidden' name='markList'></input><br>" +
		"<label><input type='checkbox' checked='false' name='chkUnknown'>Show unknown options</label>",
	unknownDescription: "//(unknown)//",
	listViewTemplate: {
		columns: [
			{ name: 'Option', field: 'option', title: "Option", type: 'String' },
			{ name: 'Description', field: 'description', title: "Description", type: 'WikiText' },
			{ name: 'Name', field: 'name', title: "Name", type: 'String' }
		],
		rowClasses: [
			{ className: 'lowlight', field: 'lowlight' }
		]
	}
});

merge(config.macros.plugins, {
	wizardTitle: "Manage plugins",
	step1Title: "Currently loaded plugins",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	skippedText: "(This plugin has not been executed because it was added since startup)",
	noPluginText: "There are no plugins installed",
	confirmDeleteText: "Are you sure you want to delete these plugins:\n\n%0",
	removeLabel: "remove systemConfig tag",
	removePrompt: "Remove systemConfig tag",
	deleteLabel: "delete",
	deletePrompt: "Delete these tiddlers forever",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Description", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Version", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Size", type: 'Size' },
			{ name: 'Forced', field: 'forced', title: "Forced", tag: 'systemConfigForce', type: 'TagCheckbox' },
			{ name: 'Disabled', field: 'disabled', title: "Disabled", tag: 'systemConfigDisable', type: 'TagCheckbox' },
			{ name: 'Executed', field: 'executed', title: "Loaded", type: 'Boolean', trueText: "Yes", falseText: "No" },
			{ name: 'Startup Time', field: 'startupTime', title: "Startup Time", type: 'String' },
			{ name: 'Error', field: 'error', title: "Status", type: 'Boolean', trueText: "Error", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	},
	listViewTemplateReadOnly: {
		columns: [
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Description', field: 'Description', title: "Description", type: 'String' },
			{ name: 'Version', field: 'Version', title: "Version", type: 'String' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Size", type: 'Size' },
			{ name: 'Executed', field: 'executed', title: "Loaded", type: 'Boolean', trueText: "Yes", falseText: "No" },
			{ name: 'Startup Time', field: 'startupTime', title: "Startup Time", type: 'String' },
			{ name: 'Error', field: 'error', title: "Status", type: 'Boolean', trueText: "Error", falseText: "OK" },
			{ name: 'Log', field: 'log', title: "Log", type: 'StringList' }
		],
		rowClasses: [
			{ className: 'error', field: 'error' },
			{ className: 'warning', field: 'warning' }
		]
	}
});

merge(config.macros.toolbar, {
	moreLabel: "more",
	morePrompt: "Show additional commands",
	lessLabel: "less",
	lessPrompt: "Hide additional commands",
	separator: "|"
});

merge(config.macros.refreshDisplay, {
	label: "refresh",
	prompt: "Redraw the entire TiddlyWiki display"
});

merge(config.macros.importTiddlers, {
	readOnlyWarning: "You cannot import into a read-only TiddlyWiki file. Try opening it from a file:// URL",
	wizardTitle: "Import tiddlers from another file or server",
	step1Title: "Step 1: Locate the server or TiddlyWiki file",
	step1Html: "Specify the type of the server: <select name='selTypes'><option value=''>Choose...</option></select><br>" +
		"Enter the URL or pathname here: <input type='text' size=50 name='txtPath'><br>" +
		"...or browse for a file: <input type='file' size=50 name='txtBrowse'><br><hr>" +
		"...or select a pre-defined feed: <select name='selFeeds'><option value=''>Choose...</option></select>",
	openLabel: "open",
	openPrompt: "Open the connection to this file or server",
	statusOpenHost: "Opening the host",
	statusGetWorkspaceList: "Getting the list of available workspaces",
	step2Title: "Step 2: Choose the workspace",
	step2Html: "Enter a workspace name: <input type='text' size=50 name='txtWorkspace'><br>" +
		"...or select a workspace: <select name='selWorkspace'><option value=''>Choose...</option></select>",
	cancelLabel: "cancel",
	cancelPrompt: "Cancel this import",
	statusOpenWorkspace: "Opening the workspace",
	statusGetTiddlerList: "Getting the list of available tiddlers",
	errorGettingTiddlerList: "Error getting list of tiddlers, click Cancel to try again",
	errorGettingTiddlerListHttp404: "Error retrieving tiddlers from url, please ensure the url exists. Click Cancel to try again.",
	errorGettingTiddlerListHttp: "Error retrieving tiddlers from url, please " +
		"ensure this url exists and is <a href='http://enable-cors.org/'>CORS</a> enabled",
	errorGettingTiddlerListFile: "Error retrieving tiddlers from local file, " +
		"please make sure the file is in the same directory as your TiddlyWiki. Click Cancel to try again.",
	step3Title: "Step 3: Choose the tiddlers to import",
	step3Html: "<input type='hidden' name='markList'></input><br><input type='checkbox' checked='true' name='chkSync'>" +
		"Keep these tiddlers linked to this server so that you can synchronise subsequent changes</input><br>" +
		"<input type='checkbox' name='chkSave'>Save the details of this server in a 'systemServer' tiddler called:</input>" +
		" <input type='text' size=25 name='txtSaveTiddler'>",
	importLabel: "import",
	importPrompt: "Import these tiddlers",
	confirmOverwriteText: "Are you sure you want to overwrite these tiddlers:\n\n%0",
	step4Title: "Step 4: Importing %0 tiddler(s)",
	step4Html: "<input type='hidden' name='markReport'></input>", // DO NOT TRANSLATE
	doneLabel: "done",
	donePrompt: "Close this wizard",
	statusDoingImport: "Importing tiddlers",
	statusDoneImport: "All tiddlers imported",
	systemServerNamePattern: "%2 on %1",
	systemServerNamePatternNoWorkspace: "%1",
	confirmOverwriteSaveTiddler: "The tiddler '%0' already exists. Click 'OK' " +
		"to overwrite it with the details of this server, or 'Cancel' to leave it unchanged",
	serverSaveTemplate: "|''Type:''|%0|\n|''URL:''|%1|\n|''Workspace:''|%2|\n\n" +
		"This tiddler was automatically created to record the details of this server",
	serverSaveModifier: "(System)",
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'Selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Size', field: 'size', tiddlerLink: 'size', title: "Size", type: 'Size' },
			{ name: 'Tags', field: 'tags', title: "Tags", type: 'Tags' }
		],
		rowClasses: [
		]
	}
});

merge(config.macros.upgrade, {
	wizardTitle: "Upgrade TiddlyWiki",
	step1Title: "Update or repair TiddlyWiki core to the latest release",
	step1Html: "You are about to upgrade TiddlyWiki core to the latest release " +
		"(from <a href='%0' class='externalLink' target='_blank'>%1</a>). " +
		"Your content will be preserved across the upgrade.<br><br>" +
		"Note that core upgrades have been known to interfere with older plugins. " +
		"If you run into problems with upgrading, read how to handle them " +
		"<a href='" + (config.macros.upgrade.docsUrl ? '%2' : 'https://classic.tiddlywiki.com/#HowToUpgrade') +
		"' class='externalLink' target='_blank'>here</a>.",
	errorCantUpgrade: "Unable to upgrade this TiddlyWiki. You can only perform upgrades on TiddlyWiki files stored locally",
	errorNotSaved: "You must save changes before you can perform an upgrade",
	step2Title: "Confirm the upgrade details",
	step2Html_downgrade: "You are about to downgrade to TiddlyWiki version %0 from %1.<br><br>Downgrading to an earlier version of the core code is not recommended",
	step2Html_restore: "This TiddlyWiki appears to be already using the latest version of the core code (%0).<br><br>" +
		"You can continue to upgrade anyway to ensure that the core code hasn't been corrupted or damaged",
	step2Html_upgrade: "You are about to upgrade to TiddlyWiki version %0 from %1",
	upgradeLabel: "upgrade",
	upgradePrompt: "Prepare for the upgrade process",
	statusPreparingBackup: "Preparing backup",
	statusSavingBackup: "Saving backup file",
	errorSavingBackup: "There was a problem saving the backup file",
	errorVerifyingBackup: "Failed to verify the backup was saved. " +
		"This is either because it wasn't saved to the moment of the check or " +
		"loading file doesn't work with your saver (and it is needed for " +
		"the next step of upgrading). To upgrade your TiddlyWiki, you can use " +
		"other methods listed at <a href='%0' class='externalLink' target='_blank'>%0</a>",
	statusLoadingCore: "Loading core code",
	errorLoadingCore: "Error loading the core code",
	errorCoreFormat: "Error with the new core code",
	statusSavingCore: "Saving the new core code",
	statusReloadingCore: "Reloading the new core code",
	startLabel: "start",
	startPrompt: "Start the upgrade process",
	cancelLabel: "cancel",
	cancelPrompt: "Cancel the upgrade process",
	step3Title: "Upgrade cancelled",
	step3Html: "You have cancelled the upgrade process"
});

// Since 2.6.6, sync is not used (see e901015); left here for backwards compatibility
merge(config.macros.sync, {
	listViewTemplate: {
		columns: [
			{ name: 'Selected', field: 'selected', rowName: 'title', type: 'Selector' },
			{ name: 'Tiddler', field: 'tiddler', title: "Tiddler", type: 'Tiddler' },
			{ name: 'Server Type', field: 'serverType', title: "Server type", type: 'String' },
			{ name: 'Server Host', field: 'serverHost', title: "Server host", type: 'String' },
			{ name: 'Server Workspace', field: 'serverWorkspace', title: "Server workspace", type: 'String' },
			{ name: 'Status', field: 'status', title: "Synchronisation status", type: 'String' },
			{ name: 'Server URL', field: 'serverUrl', title: "Server URL", text: "View", type: 'Link' }
		],
		rowClasses: [
		],
		buttons: [
			{ caption: "Sync these tiddlers", name: 'sync' }
		]
	},
	wizardTitle: "Synchronize with external servers and files",
	step1Title: "Choose the tiddlers you want to synchronize",
	step1Html: "<input type='hidden' name='markList'></input>", // DO NOT TRANSLATE
	syncLabel: "sync",
	syncPrompt: "Sync these tiddlers",
	hasChanged: "Changed while unplugged",
	hasNotChanged: "Unchanged while unplugged",
	syncStatusList: {
		none: { text: "...", display: 'none', className: 'notChanged' },
		changedServer: { text: "Changed on server", display: null, className: 'changedServer' },
		changedLocally: { text: "Changed while unplugged", display: null, className: 'changedLocally' },
		changedBoth: { text: "Changed while unplugged and on server", display: null, className: 'changedBoth' },
		notFound: { text: "Not found on server", display: null, className: 'notFound' },
		putToServer: { text: "Saved update on server", display: null, className: 'putToServer' },
		gotFromServer: { text: "Retrieved update from server", display: null, className: 'gotFromServer' }
	}
});

merge(config.commands.closeTiddler, {
	text: "close",
	tooltip: "Close this tiddler"
});

merge(config.commands.closeOthers, {
	text: "close others",
	tooltip: "Close all other tiddlers"
});

merge(config.commands.editTiddler, {
	text: "edit",
	tooltip: "Edit this tiddler",
	readOnlyText: "view",
	readOnlyTooltip: "View the source of this tiddler"
});

merge(config.commands.saveTiddler, {
	text: "done",
	tooltip: "Save changes to this tiddler"
});

merge(config.commands.cancelTiddler, {
	text: "cancel",
	tooltip: "Undo changes to this tiddler",
	warning: "Are you sure you want to abandon your changes to '%0'?",
	readOnlyText: "done",
	readOnlyTooltip: "View this tiddler normally"
});

merge(config.commands.deleteTiddler, {
	text: "delete",
	tooltip: "Delete this tiddler",
	warning: "Are you sure you want to delete '%0'?"
});

merge(config.commands.permalink, {
	text: "permalink",
	tooltip: "Permalink for this tiddler"
});

merge(config.commands.references, {
	text: "references",
	tooltip: "Show tiddlers that link to this one",
	popupNone: "No references"
});

merge(config.commands.jump, {
	text: "jump",
	tooltip: "Jump to another open tiddler"
});

// Since 2.6.6, sync is not used (see e901015); left here for backwards compatibility
merge(config.commands.syncing, {
	text: "syncing",
	tooltip: "Control synchronisation of this tiddler with a server or external file",
	currentlySyncing: "<div>Currently syncing via <span class='popupHighlight'>'%0'</span> to:</div>" +
		"<div>host: <span class='popupHighlight'>%1</span></div>" +
		"<div>workspace: <span class='popupHighlight'>%2</span></div>",
	notCurrentlySyncing: "Not currently syncing",
	captionUnSync: "Stop synchronising this tiddler",
	chooseServer: "Synchronise this tiddler with another server:",
	currServerMarker: "\u25cf ",
	notCurrServerMarker: "  "
});

merge(config.commands.fields, {
	text: "fields",
	tooltip: "Show the extended fields of this tiddler",
	emptyText: "There are no extended fields for this tiddler",
	listViewTemplate: {
		columns: [
			{ name: 'Field', field: 'field', title: "Field", type: 'String' },
			{ name: 'Value', field: 'value', title: "Value", type: 'String' }
		],
		rowClasses: [
		],
		buttons: [
		]
	}
});

var gettingStartedTitle = "GettingStarted";

merge(config.shadowTiddlers, {
	DefaultTiddlers: '[[' + gettingStartedTitle + ']]',
	[gettingStartedTitle]: "When getting started, you may want to:\n" +
		"* Set your username for signing your edits: <<option txtUserName>>\n" +
		"* Change the page [[title|SiteTitle]] (now \"<<tiddler SiteTitle>>\") and " +
			"[[subtitle|SiteSubtitle]] (now \"<<tiddler SiteSubtitle>>\"); they also set the browser tab title\n" +
		"* Create a tiddler where your content \"starts\"\n" +
		"** Use the button on the sidebar or [[link|My first tiddler]] it here, " +
			"follow the link, edit, and click \"done\"\n" +
		"** It will be shown in the Timeline (usually on the right), " +
			"but you may want to link it in the MainMenu (usually on the left)\n" +
		"** and/or make it open when the ~TiddlyWiki is opened by editing the list of " +
			"[[DefaultTiddlers]] (separate links with spaces or linebreaks)\n" +
		"* Save your ~TiddlyWiki\n" +
		"** Although \"download saving\" works in any browser, it's not that convenient, " +
			"so you'll probably want to use [[a dedicated saver|https://classic.tiddlywiki.com/#%5B%5BSetting up saving%5D%5D]]",
	MainMenu: "[[" + gettingStartedTitle + "]]\n\n~TiddlyWiki version <<version>>",
	SiteTitle: "My TiddlyWiki",
	SiteSubtitle: "a reusable non-linear personal web notebook",
	SiteUrl: "",
	OptionsPanel: "These Interface Options for customising TiddlyWiki are saved in your browser\n\nYour username for signing your edits. Write it as a WikiWord (eg JoeBloggs)\n<<option txtUserName>>\n\n<<option chkSaveBackups>> Save backups\n<<option chkAutoSave>> Auto save\n<<option chkRegExpSearch>> Regexp search\n<<option chkCaseSensitiveSearch>> Case sensitive search\n<<option chkAnimate>> Enable animations\n\n----\nAlso see [[TranslatedAdvancedOptions|AdvancedOptions]]",
	SideBarOptions: '<<search>><<closeAll>><<permaview>><<newTiddler>><<newJournal "DD MMM YYYY" "journal">>' +
		'<<saveChanges>><<slider chkSliderOptionsPanel OptionsPanel "options \u00bb" "Change TiddlyWiki advanced options">>',
	SideBarTabs: '<<tabs txtMainTab "Timeline" "Timeline" TabTimeline "All" "All tiddlers" TabAll "Tags" "All tags" TabTags "More" "More lists" TabMore>>',
	TabMore: '<<tabs txtMoreTab "Missing" "Missing tiddlers" TabMoreMissing "Orphans" "Orphaned tiddlers" TabMoreOrphans "Shadowed" "Shadowed tiddlers" TabMoreShadowed>>'
});

merge(config.annotations, {
	AdvancedOptions: "This shadow tiddler provides access to several advanced options",
	ColorPalette: "These values in this shadow tiddler determine the colour scheme of the ~TiddlyWiki user interface",
	DefaultTiddlers: "The tiddlers listed in this shadow tiddler will be automatically displayed when ~TiddlyWiki starts up",
	EditTemplate: "The HTML template in this shadow tiddler determines how tiddlers look while they are being edited",
	[gettingStartedTitle]: "This shadow tiddler provides basic usage instructions",
	ImportTiddlers: "This shadow tiddler provides access to importing tiddlers",
	MainMenu: "This shadow tiddler is used as the contents of the main menu in the left-hand column of the screen",
	MarkupPreHead: "This tiddler is inserted at the top of the <head> section of the TiddlyWiki HTML file",
	MarkupPostHead: "This tiddler is inserted at the bottom of the <head> section of the TiddlyWiki HTML file",
	MarkupPreBody: "This tiddler is inserted at the top of the <body> section of the TiddlyWiki HTML file",
	MarkupPostBody: "This tiddler is inserted at the end of the <body> section of the TiddlyWiki HTML file immediately after the script block",
	OptionsPanel: "This shadow tiddler is used as the contents of the options panel slider in the right-hand sidebar",
	PageTemplate: "The HTML template in this shadow tiddler determines the overall ~TiddlyWiki layout",
	PluginManager: "This shadow tiddler provides access to the plugin manager",
	SideBarOptions: "This shadow tiddler is used as the contents of the option panel in the right-hand sidebar",
	SideBarTabs: "This shadow tiddler is used as the contents of the tabs panel in the right-hand sidebar",
	SiteSubtitle: "This shadow tiddler is used as the second part of the page title",
	SiteTitle: "This shadow tiddler is used as the first part of the page title",
	SiteUrl: "This shadow tiddler should be set to the full target URL for publication",
	StyleSheetColors: "This shadow tiddler contains CSS definitions related to the color of page elements. " +
		"''DO NOT EDIT THIS TIDDLER'', instead make your changes in the StyleSheet shadow tiddler",
	StyleSheet: "This tiddler can contain custom CSS definitions",
	StyleSheetLayout: "This shadow tiddler contains CSS definitions related to the layout of page elements. " +
		"''DO NOT EDIT THIS TIDDLER'', instead make your changes in the StyleSheet shadow tiddler",
	StyleSheetLocale: "This shadow tiddler contains CSS definitions related to the translation locale",
	StyleSheetPrint: "This shadow tiddler contains CSS definitions for printing",
	SystemSettings: "Options may be stored here using the slice notation (like {{{chkAutoSave: true}}} or {{{|txtUserName|The great inventor|}}})",
	TabAll: "This shadow tiddler contains the contents of the 'All' tab in the right-hand sidebar",
	TabMore: "This shadow tiddler contains the contents of the 'More' tab in the right-hand sidebar",
	TabMoreMissing: "This shadow tiddler contains the contents of the 'Missing' tab in the right-hand sidebar",
	TabMoreOrphans: "This shadow tiddler contains the contents of the 'Orphans' tab in the right-hand sidebar",
	TabMoreShadowed: "This shadow tiddler contains the contents of the 'Shadowed' tab in the right-hand sidebar",
	TabTags: "This shadow tiddler contains the contents of the 'Tags' tab in the right-hand sidebar",
	TabTimeline: "This shadow tiddler contains the contents of the 'Timeline' tab in the right-hand sidebar",
	ToolbarCommands: "This shadow tiddler determines which commands are shown in tiddler toolbars",
	ViewTemplate: "The HTML template in this shadow tiddler determines how tiddlers look"
});

//}}}