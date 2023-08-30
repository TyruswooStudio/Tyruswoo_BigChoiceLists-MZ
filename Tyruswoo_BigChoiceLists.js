//=============================================================================
// Big Choice Lists
// For RPG Maker MZ
// By Tyruswoo and McKathlin
//=============================================================================

/*
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var Imported = Imported || {};
Imported.Tyruswoo_BigChoiceLists = true;

var Tyruswoo = Tyruswoo || {};
Tyruswoo.BigChoiceLists = Tyruswoo.BigChoiceLists || {};

/*:
 * @target MZ
 * @plugindesc MZ v1.0.1 Choice lists with any number of options!
 * @author Tyruswoo and McKathlin
 * @url https://www.tyruswoo.com
 * 
 * @help Tyruswoo Big Choice Lists for RPG Maker MZ
 * ============================================================================
 * Compatibility:
 * 
 * This plugin is fully cross-compatible with McKathlin_SwitchableText.js,
 * regardless of their order relative to each other in the plugin list.
 * Using both together lets you make big choice lists with in which the
 * choices conditionally hide, show, or change their text.
 * 
 * This plugin coordinates with Tyruswoo_EventAI.js for the plugin command
 * List Events from Map. It doesn't matter where Tyruswoo_BigChoiceLists is
 * on the plugin list relative to Tyruswoo_EventAI or any other Tyruswoo or
 * McKathlin plugin.
 * 
 * Non-Tyruswoo plugins that directly alter the way choice lists are built
 * and displayed may conflict with Big Choice Lists. If these conflicts
 * persist after you've placed Tyruswoo_BigChoiceLists.js BELOW other
 * choice list altering plugins, talk with us at Tyruswoo.com and we'll do our
 * best to help you.
 * 
 * ============================================================================
 * Overview:
 * 
 * This plugin enables choice lists to show any number of choices,
 * in customized scrolling windows.
 * * Put multiple Show Choices commands one after the other, and the choices
 *   in them will show up together in one choice list.
 * * Use the Wide Choice List plugin command, and the next choice list shown
 *   will be as wide as the message window, and will display the choices in
 *   as many columns and visible rows as you specify in the plugin command.
 * 
 * Using Big Choice Lists with other plugins:
 * * McKathlin Switchable Text snippets can alter or hide each choice in the
 *   list, based on a given condition.
 * * The plugin command List Events from Map requires Tyruswoo_EventAI.js.
 *   It loads the names of events from a map, filtered by the events'
 *   self switches or self variables.
 * 
 * ============================================================================
 * Step by Step:
 * 
 * How to Make a List of Ten Choices:
 * ----------------------------------------------
 * 1. Open the Event Editor, and start setting up a choice list as you usually
 *    would: make a Show Text command to put the text that will display while
 *    the choices are on screen, and then make a Show Choices command with the
 *    first six choices you want in your list.
 * 2. If your default choice is among the first six choices, set it now.
 *    If not, set Default to None.
 * 3. If your cancel choice is among the first six choices, set it now.
 *    If not, set Cancel to Disallow.
 * 4. Find the end of the choice branches just generated, and put another
 *    Show Choices command directly after the end of these choice branches.
 *    This is where you'll put your last four choices.
 * 5. If your Default choice is among these last four choices, set it now.
 *    When multiple Show Choices commands are combined, the 1st Default that
 *    isn't None takes precedence.
 * 6. If your Cancel choice is among the last four choices, set it now.
 *    If your Cancel choice was earlier in the list or you want to disallow
 *    cancelling, choose Disallow. If you want Cancel to have its own branch,
 *    the last Show Choices command of the chain is a good place to put it.
 *    (If more than one Show Choices command in a chain has a Cancel branch,
 *    then ALL cancel branches in the chain will run, one by one, after the
 *    player chooses Cancel.)
 * 
 * Lists with any number of choices work similarly: place Show Choices
 * commands one after another, and set Default and Cancel choices in the
 * Show Choices commands that contain them. There is no set limit to how many
 * you can line up and combine into a long choice list.
 * 
 * By themselves, the above steps will make a long choice list that's displayed
 * in a scrolling single-column window no wider than the widest choice text.
 * To give them a wide multi-column display, read on.
 *
 * How to Display a Choice List in a Wide, Multi-column Window
 * ------------------------------------------------------------
 * 1. Set up your message text and choice list as described in the how-to
 *    above.
 * 2. Directly BEFORE the message text that accompanies the choice list,
 *    create a plugin command. Select the plugin Tyruswoo_BigChoiceLists,
 *    and the command Wide Choice List.
 * 3. The following arguments appear in the table: Column Count (set to 2),
 *    Visible Row Count (set to Fit), and Vertical Placement (set to Adjacent).
 *    If you'd like to change the number of columns or rows, double click on
 *    these arguments to change them. If you want some space showing in the
 *    middle of the screen between the message window and the Big Choice List,
 *    double click on Vertical Placement and choose Opposite.
 * 4. Click OK at the bottom of the Plugin Command dialog box. You're all set!
 *
 * A Wide Choice List plugin command affects only the next choice list window
 * that shows up. Other choice lists in this event and others are unaffected.
 * 
 * * * *
 * Bonus tip: If you want to alter or hide some choices based on self switches,
 * game switches, or variables, McKathlin's Switchable Text plugin has the
 * tools for the job. It's available on Tyruswoo.com.
 * * * *
 * 
 * How To Make a Big Choice List that Shows Known, Incomplete Quests
 * ------------------------------------------------------------------
 * 1. Decide on the names of the quests you want available for discussion,
 *    and then set up two lists of switches for them: one for whether each
 *    quest is known, and another for whether each quest is complete.
 *    For example, a quest named "Bring Me a Shrubbery" could have a switch
 *    in the Known group called "Known: Bring Me a Shrubbery", and a switch
 *    in the Done group called "Done: Bring Me a Shrubbery".
 * 2. Throughout your game, when the player becomes aware of some quest,
 *    turn that quest's Known switch ON. When the player completes a quest,
 *    turn the quest's Done switch ON.
 * 3. Now you're ready to set up a big choice list of quests.
 *    Suppose the hero has a wise advisor to discuss quests with, and this
 *    big choice list is how the hero chooses which quest to discuss.
 *    Create a plugin command, and pick this plugin's "List Switches".
 * 4. Set the switch groups. For the Known group, identify the first switch
 *    and last switch of the range, require switch state ON, and set the prefix
 *    to "Known: ". This prefix will be expected at the beginning of the switch
 *    name, but excluded from the beginning of the corresponding list item.
 *    For the Done group, set the range, require switch state OFF so that only
 *    incomplete quests will show up, and set the prefix to "Done: ".
 * 5. Now that your switch groups are set up, ensure that Matching Rule is set
 *    to "Match All Groups". Using this rule ensures that only quests that are
 *    known AND unfinished will show up on the list.
 * 6. In the Always Show argument, list any choices that aren't affected by
 *    filters. These needn't be in the quest switches. Always Show choices
 *    can be useful for links to other topics, or to end the conversation.
 * 7. Choose your list display settings: Column Count, Visible Row Count, and
 *    Vertical Placement, the same way you would set them for the Wide Choice
 *    List plugin command. Once you're done customizing, click OK.
 * 8. Now set up a Show Text command if desired, and as many Show Choices
 *    commands as you need to list all questlines. Make sure the choices
 *    on the list match the names of your questline events (minus prefixes and
 *    postfixes) or Always Show choices exactly, or they'll be filtered out!
 * 9. Fill each resulting choice branch with any discussion you have in mind
 *    for that questline.
 *
 * ============================================================================
 * Version History:
 * 
 * v1.0  3/10/2023
 *        - Big Choice Lists released for RPG Maker MZ!
 *        - Combine multiple Show Choices commands to make a long choice list!
 *        - Display multi-column choice lists!
 *        - Fully compatible with Switchable Text.
 *        - List Switches plugin command filters by switch state.
 * 
 * v1.0.1  8/30/2023
 *        - This plugin is now free and open source under the MIT license.
 * ============================================================================
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 * ============================================================================
 * Remember, only you can build your dreams!
 * -Tyruswoo
 * 
 * @command wide_choice_list
 * @text Wide Choice List
 * @desc Put the next choice list in a wide window,
 * with the given column and row count.
 * 
 * @arg column_count
 * @text Column Count
 * @type number
 * @min 1
 * @max 30
 * @default 2
 * @desc Arrange the choice list in this many columns.
 * 
 * @arg row_count
 * @text Visible Row Count
 * @type select
 * @option Fit
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option Max
 * @default Fit
 * @desc Tailor choice list height to show this many rows.
 * "Fit" shows just enough rows for this list's choices.
 * 
 * @arg vertical_placement
 * @text Vertical Placement
 * @type select
 * @option Adjacent
 * @option Opposite
 * @default Adjacent
 * @desc Choice window's placement relative to message window.
 * 
 * 
 * @command list_switches
 * @text List Switches
 * @desc The next choice list will show only names of switches
 * matching this filtered list.
 * 
 * @arg switch_groups
 * @text Switch Group(s)
 * @type struct<switchGroup>[]
 * @default []
 * @desc Switches from these groups are eligible for the list.
 * 
 * @arg choice_matching_rule
 * @text Choice Matching Rule
 * @type select
 * @option Match All Groups
 * @option Match Any Group
 * @default Match All Groups
 * @desc Whether a switch name must match all groups to show up,
 * or if matching any group is enough.
 * 
 * @arg always_show
 * @text Always Show
 * @type string[]
 * @default []
 * @desc Always accept these choices as part of the list.
 * 
 * @arg column_count
 * @text Column Count
 * @type select
 * @option 1 Fitted
 * @option 1 Wide
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @default 2
 * @desc Arrange the choice list in this many columns.
 * 1 Fitted adjusts window to text width; others are wide.
 * 
 * @arg row_count
 * @text Visible Row Count
 * @type select
 * @option Fit
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option Max
 * @default Fit
 * @desc Tailor choice list height to show this many rows.
 * "Fit" shows just enough rows for this list's choices.
 * 
 * @arg vertical_placement
 * @text Vertical Placement
 * @type select
 * @option Adjacent
 * @option Opposite
 * @default Adjacent
 * @desc Choice window's placement relative to message window.
 *
 */

// The command list_events_from_map has been disabled for now.
// To re-enable it, rejoin the @command declaration below with the
// rest of the plugin description above,
// and remove the multi-line comment delimiters from around its
// registerCommand statement.
/*
 * @command list_events_from_map
 * @text List Events from Map
 * @desc The next choice list will show only names of events
 * matching this filtered list. Requires Tyruswoo_EventAI.
 * 
 * @arg map_name
 * @text Map Name
 * @type text
 * @desc The in-editor name of the map containing the events to link
 * 
 * @arg self_switch_filters
 * @text Self Switch Filters
 * @type struct<selfSwitchFilter>[]
 * @default []
 * @desc Only names of events with self switches matching all
 * these filters will show up in the next list.
 * 
 * @arg extra_self_switch_filters
 * @text Extra Self Switch Filters
 * @type struct<extraSelfSwitchFilter>[]
 * @default []
 * @desc Only events with extra self switches matching all
 * these filters will show up in the next list.
 * 
 * @arg self_variable_filters
 * @text Self Variable Filters
 * @type struct<selfVariableFilter>[]
 * @default []
 * @desc Only events with self variables matching all
 * comparisons will show up in the next list.
 * 
 * @arg always_show
 * @text Always Show
 * @type text[]
 * @desc These choices always show up in the choice list,
 * regardless of filters or map.
 * 
 * 
 * 
 * @arg row_count
 * @text Visible Row Count
 * @type select
 * @option Fit
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option Max
 * @default Fit
 * @desc Tailor choice list height to show this many rows.
 * "Fit" shows just enough rows for this list's choices.
 * 
 * @arg vertical_placement
 * @text Vertical Placement
 * @type select
 * @option Adjacent
 * @option Opposite
 * @default Adjacent
 * @desc Choice window's placement relative to message window.
 */

/*~struct~selfSwitchFilter:
 * @param id
 * @type select
 * @option A
 * @option B
 * @option C
 * @option D
 * @default A
 * @desc The self switch to check.
 *
 * @param value
 * @type boolean
 * @default true
 * @desc The expected value for this self switch
 */

/*~struct~extraSelfSwitchFilter:
 * @param id
 * @type switch
 * @desc Pick a game switch that functions as an extra self switch.
 *
 * @param value
 * @type boolean
 * @default true
 * @desc The expected value for this self switch
 */

/*~struct~selfVariableFilter:
 * @param id
 * @type variable
 * @desc Pick a game variable that functions as a self variable.
 *
 * @param comparator
 * @type select
 * @option <
 * @option <=
 * @option ==
 * @option >=
 * @option >
 * @option !=
 * @default >=
 * @desc The self variable's value must have this relationship
 * to the comparison value, for its event to qualify.
 * 
 * @param value
 * @type number
 * @min -999999999
 * @default 1
 * @desc The comparison value for this self variable
 */

/*~struct~switchRangeFilter:
 * @param first_switch
 * @text First Switch
 * @type switch
 * @desc The first switch included in the range.
 * 
 * @param last_switch
 * @text Last Switch
 * @type switch
 * @desc The last switch included in the range.
 */

/*~struct~switchGroup:
 * @param ranges
 * @text Range(s)
 * @type struct<switchRangeFilter>[]
 * @default []
 * @desc Only switches in the given ID range(s) are included.
 * If no range given, all switches are in range.
 * 
 * @param state
 * @text Switch State
 * @type select
 * @option Any
 * @option ON
 * @option OFF
 * @default Any
 * @desc Only switches in the given state are included.
 * To include regardless of state, pick Any.
 * 
 * @param prefix
 * @text Prefix
 * @type text
 * @default 
 * @desc If non-empty, require this text before the switch name,
 * but don't display it in the choice list.
 *
 * @param postfix
 * @text Postfix
 * @type text
 * @default 
 * @desc If non-empty, require this text after the switch name,
 * but don't display it in the choice list.
 */


(() => {
	const pluginName = "Tyruswoo_BigChoiceLists";

	//=============================================================================
	// Wide Choice List plugin command
	//=============================================================================

	PluginManager.registerCommand(pluginName, "wide_choice_list", args => {
		Tyruswoo.BigChoiceLists.setNextWindowSettings(
			true, args.column_count, args.row_count, args.vertical_placement);
	});

	Tyruswoo.BigChoiceLists.setNextWindowSettings = function(isWide, c=1, r="Fit", vp="Adjacent") {
		if ('string' == typeof c) {
			c = c.startsWith("1 ") ? 1 : Number(c);
		}
		this._nextSettings = {
			isWide: isWide,
			colCount: c,
			rowStyle: r,
			verticalPlacement: vp
		};
	};

	Tyruswoo.BigChoiceLists.applyNextWindowSettings = function() {
		const args = this._nextSettings;
		this._nextSettings = null;
		if (args && args.isWide) {
			// Apply these wide window settings.
			$gameMessage.setChoiceWideWindow(
				args.colCount, args.rowStyle, args.verticalPlacement);
		} else {
			// Settings were empty, or called for a standard window.
			// Apply standard window settings.
			rowStyle = args && args.rowStyle ?
				args.rowStyle : "Fit"; 
			vp = args && args.verticalPlacement ?
				args.verticalPlacement : "Adjacent";
			$gameMessage.setChoiceStandardWindow(rowStyle, vp);
		}
	};

	//-----------------------------------------------------------------------------
	// Game_Message keeps track of wide choice list settings.
	//-----------------------------------------------------------------------------

	Game_Message.prototype.setChoiceWideWindow = function(colCount, rowStyle, vp) {
		this._choiceIsWideWindow = true;
		this._choiceColumnCount = Number(colCount);
		this._choiceRowStyle = rowStyle;
		this._choiceVerticalPlacement = vp;
	};

	Game_Message.prototype.setChoiceStandardWindow = function(rowStyle = "Fit", vp="Adjacent") {
		this._choiceIsWideWindow = false;
		this._choiceColumnCount = 1;
		this._choiceRowStyle = rowStyle;
		this._choiceVerticalPlacement = vp;
	};

	Game_Message.prototype.isChoiceWideWindow = function() {
		return !!this._choiceIsWideWindow;
	};

	Game_Message.prototype.choiceColumnCount = function() {
		return this._choiceColumnCount || 1;
	};

	Game_Message.prototype.choiceRowStyle = function() {
		return this._choiceRowStyle || 'Fit';
	};

	Game_Message.prototype.choiceVerticalPlacement = function() {
		return this._choiceVerticalPlacement || 'Adjacent';
	};

	//=============================================================================
	// Filter system
	// Used by List Switches and List Events from Map
	//=============================================================================
	// Public filter access
	//-----------------------------------------------------------------------------

	Tyruswoo.BigChoiceLists.setNextFilter = function(filter) {
		this._nextFilter = filter;
	};

	Tyruswoo.BigChoiceLists.takeNextFilter = function() {
		if (this._nextFilter) {
			let filter = this._nextFilter;
			this._nextFilter = null;
			return filter;
		} else {
			this._defaultFilter = this._defaultFilter ||
				new Tyruswoo.BigChoiceLists.NonEmptyFilter();
			return this._defaultFilter;
		}
	};

	//-----------------------------------------------------------------------------
	// FilterBase object
	//-----------------------------------------------------------------------------

	Tyruswoo.BigChoiceLists.FilterBase = function() {
		this.initialize(...arguments);
	};

	Tyruswoo.BigChoiceLists.FilterBase.prototype.initialize = function() {
		// This stock function always returns true.
		this._funcPass = element => true;
	};

	Tyruswoo.BigChoiceLists.FilterBase.prototype.checkElement = function(element) {
		// Subclass can override with any type of check.
		// This check always returns true.
		return this._funcPass(element);
	};

	Tyruswoo.BigChoiceLists.FilterBase.prototype.filterList = function(list) {
		return list.filter(element => this.checkElement(element));
	};

	Tyruswoo.BigChoiceLists.FilterBase.prototype.unpackArrayJson = 
	function(json) {
		var arr;
		if (json) {
			arr = JSON.parse(json);
		} else {
			arr = [];
		}

		for (var i = 0; i < arr.length; i++) {
			if (arr[i].startsWith('{') && arr[i].endsWith('}')) {
				// It's a struct. Unpack it.
				arr[i] = JSON.parse(arr[i]);
			}
		}
		return arr;
	};

	//-----------------------------------------------------------------------------
	// NonEmptyFilter object
	//-----------------------------------------------------------------------------

	Tyruswoo.BigChoiceLists.NonEmptyFilter = function() {
		this.initialize(...arguments);
	};

	Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype = Object.create(
		Tyruswoo.BigChoiceLists.FilterBase.prototype);
	Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype.constructor =
		Tyruswoo.BigChoiceLists.NonEmptyFilter;

	Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype.initialize = function() {
		Tyruswoo.BigChoiceLists.FilterBase.prototype.initialize.call(this);
		this._funcIsEmptyText = Imported.McKathlin_SwitchableText ?
			McKathlin.SwitchableText.isEmpty :
			text => !text || 0 == text.trim().length;
	};

	Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype.checkElement = function(element) {
		return !this._funcIsEmptyText(element);
	};

	//=============================================================================
	// List Switches plugin command
	//=============================================================================

	PluginManager.registerCommand(pluginName, "list_switches", args => {
		var isWide = !args.column_count.includes("Fitted");
		Tyruswoo.BigChoiceLists.setNextWindowSettings(
			isWide, args.column_count, args.row_count, args.vertical_placement);
		try {
			const filter = new Tyruswoo.BigChoiceLists.SwitchListFilter(args);
			Tyruswoo.BigChoiceLists.setNextFilter(filter);
		} catch (err) {
			console.error("Error in list_switches command")
			console.error(err);
		}
	});

	//-----------------------------------------------------------------------------
	// SwitchListFilter object
	//-----------------------------------------------------------------------------

	Tyruswoo.BigChoiceLists.SwitchListFilter = function() {
		this.initialize(...arguments);
	};

	Tyruswoo.BigChoiceLists.SwitchListFilter.prototype = Object.create(
		Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype);
	Tyruswoo.BigChoiceLists.SwitchListFilter.prototype.constructor =
		Tyruswoo.BigChoiceLists.SwitchListFilter;

	Tyruswoo.BigChoiceLists.SwitchListFilter.prototype.initialize =
	function(args) {
		Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype.initialize.call(this);
		// Args to process: switch_groups, matching_rule and always_show.
		const combineRule = /all/i.test(args.choice_matching_rule || "") ?
			"and" : "or";
		const switchGroups = this.unpackArrayJson(args.switch_groups);
		const groupLookups = [];

		// Create lookups.
		for (const switchGroup of switchGroups) {
			let lookup = this._makeLookupForGroup(switchGroup);
			groupLookups.push(lookup);
		}
		
		// Combine lookups.
		if ("or" == combineRule) {
			this._switchNameLookup = this._unionLookups(groupLookups);
		} else {
			this._switchNameLookup = this._intersectLookups(groupLookups);
		}

		// Add strings from always_show.
		const alwaysShow = this.unpackArrayJson(args.always_show);
		for (const str of alwaysShow) {
			this._switchNameLookup[str] = true;
		}
	};

	Tyruswoo.BigChoiceLists.SwitchListFilter.prototype.checkElement =
	function(element) {
		if (!Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype.checkElement.call(
			this, element)) {
			return false;
		}
		return !!this._switchNameLookup[element];
	};

	Tyruswoo.BigChoiceLists.SwitchListFilter.prototype._makeLookupForGroup =
	function(groupObject) {
		// Group attributes: ranges, state, prefix, postfix
		const ranges = this.unpackArrayJson(groupObject.ranges);
		const state = (groupObject.state || "any").toLowerCase();
		const prefix = groupObject.prefix || "";
		const postfix = groupObject.postfix || "";

		var lookup = {};
		for (const range of ranges) {
			let min = Number(range.first_switch);
			let max = Number(range.last_switch);
			for (let i = min; i <= max; i++) {
				// Check if switch state is valid.
				let switchValue = $gameSwitches.value(i);
				let validState = (state == "any") ||
					(switchValue && state == "on") ||
					(!switchValue && state == "off");
				if (validState) {
					let switchName = $dataSystem.switches[i];
					let choiceName = switchName;
					let validName = !!switchName;

					// Process postfix
					if (postfix) {
						if (switchName.endsWith(postfix)) {
							choiceName = choiceName.substring(0,
							choiceName.length - postfix.length);
						} else {
							validName = false; // Postfix doesn't match.
						}
					}

					// Process prefix
					if (prefix) {
						if (switchName.startsWith(prefix)) {
							choiceName = choiceName.substring(prefix.length);
						} else {
							validName = false; // Prefix doesn't match.
						}
					}

					if (validName) {
						// Choice name processed successfully.
						lookup[choiceName] = true;
					} // endif switch still valid after processing
				} // endif switch valid based on state
			} // endfor each switch ID i in range
		} // endfor each switch range
		return lookup;
	};

	// Returns the set of all elements appearing in any of the given arrays.
	Tyruswoo.BigChoiceLists.SwitchListFilter.prototype._unionLookups =
	function(setOfLookups) {
		var combinedLookup = {};
		for (const lookup of setOfLookups) {
			for (const key in lookup) {
				combinedLookup[key] = true;
			}
		}
		return combinedLookup;
	};

	// Returns a lookup where only keys found in all of the lookups are true.
	Tyruswoo.BigChoiceLists.SwitchListFilter.prototype._intersectLookups =
	function(setOfLookups) {
		if (0 == setOfLookups.length) {
			return {};
		}
		var intersection = {};

		// Copy keys from first lookup.
		var startingLookup = setOfLookups[0]
		for (const k in startingLookup) {
			intersection[k] = startingLookup[k];
		}

		// Remove anything that isn't found in all lookups.
		for (let i = 1; i < setOfLookups.length; i++) {
			let lookup = setOfLookups[i];
			for (const key in intersection) {
				if (!lookup[key]) {
					intersection[key] = false;
				}
			}
		}
		return intersection;
	};

	//=============================================================================
	// List Events from Map plugin command
	//=============================================================================
	// This command is disabled for now, as its presence might give the public
	// the impression that Big Choice Lists is cross-dependent and tricky to use.
	// To re-enable the command, remove the comment block delimiters below,
	// rejoin its @command declaration to the rest of the plugin description
	// at the beginning of the file, and add a List Events from Map how-to section
	// to the help text.

	/*
	PluginManager.registerCommand(pluginName, "list_events_from_map", args => {
		if (!Imported.Tyruswoo_EventAI) {
			throw new Error("The plugin command \"List Events from Map\" " +
				"can't run unless Tyruswoo_EventAI is in the plugin list.");
		}
		var isWide = !args.column_count.includes("Fitted");
		Tyruswoo.BigChoiceLists.setNextWindowSettings(
			isWide, args.column_count, args.row_count, args.vertical_placement);

		if (args.map_name) {
			const filter = new Tyruswoo.BigChoiceLists.EventListFilter(args);
			Tyruswoo.BigChoiceLists.setNextFilter(filter);
		} else {
			console.warn("Unrecognized event filter args will be ignored.");
			console.warn(args);
		}
	});
	*/

	//-----------------------------------------------------------------------------
	// EventListFilter object
	//-----------------------------------------------------------------------------

	Tyruswoo.BigChoiceLists.EventListFilter = function() {
		this.initialize(...arguments);
	};

	Tyruswoo.BigChoiceLists.EventListFilter.prototype = Object.create(
		Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype);
	Tyruswoo.BigChoiceLists.EventListFilter.prototype.constructor =
		Tyruswoo.BigChoiceLists.EventListFilter;

	Tyruswoo.BigChoiceLists.EventListFilter.prototype.initialize = 
	function(args) {
		Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype.initialize.call(this);
		this._mapId = Tyruswoo.EventAI.getMapIdByName(args.map_name);
		this._alwaysShow = this.unpackArrayJson(args.always_show) || [];
		if (!this._mapId) {
			throw new Error("List Events from Map requires Map ID!");
		}
		this._selfSwitchSpecs = this.unpackArrayJson(args.self_switch_filters);
		this._extraSelfSwitchSpecs = this.unpackArrayJson(args.extra_self_switch_filters);
		this._selfVariableSpecs = this.unpackArrayJson(args.self_variable_filters);
		this._eventNameLookup = this._createEventNameLookup();
	};

	Tyruswoo.BigChoiceLists.EventListFilter.prototype.checkElement =
	function(element) {
		if (!Tyruswoo.BigChoiceLists.NonEmptyFilter.prototype.checkElement.call(
			this, element)) {
			return false;
		}
		return !!this._eventNameLookup[element];
	};

	Tyruswoo.BigChoiceLists.EventListFilter.prototype._createEventNameLookup =
	function() {
		var checkers = this._makeSelfSwitchChecks(this._selfSwitchSpecs);
		checkers.push(...this._makeSelfSwitchChecks(this._extraSelfSwitchSpecs));
		checkers.push(...this._makeSelfVariableChecks(this._selfVariableSpecs));

		var lookup = {};
		refMap = Tyruswoo.EventAI.loadReferenceMapSync(this._mapId);
		for (const event of refMap.events) {
			if (event) {
				let checkFailed = false;
				for (var i = 0; !checkFailed && i < checkers.length; i++) {
					let funcCheck = checkers[i];
					if (!funcCheck(event)) {
						checkFailed = true;
					}
				}
				lookup[event.name] = !checkFailed;
			}
		}

		for (const choice of this._alwaysShow) {
			lookup[choice] = true;
		}
		return lookup;
	};

	Tyruswoo.BigChoiceLists.EventListFilter.prototype._makeSelfSwitchChecks = function(specs) {
		var checks = [];
		for (const spec of specs) {
			let context = {
				id: spec.id,
				mapId: this._mapId,
				expectedValue: "true" == spec.value
			};
			checks.push(function (event) { 
				const actualValue = $gameSelfSwitches.value([this.mapId, event.id, this.id]);
				return this.expectedValue == actualValue;
			}.bind(context));
		}
		return checks;
	};

	Tyruswoo.BigChoiceLists.EventListFilter.prototype._makeSelfVariableChecks = 
	function() {
		var checks = [];
		for (const spec of this._selfVariableSpecs) {
			let funcCompare = this._getCompFunction(spec.comparator);
			let context = {
				id: spec.id,
				compareValue: spec.value,
				mapId: this._mapId,
				compareFunction: funcCompare
			};
			let funcCheck = function(event) {
				const key = [this.mapId, event.id, this.id];
				const actualValue = $gameSelfVariables.value(key);
				return this.compareFunction(actualValue, this.compareValue);
			}.bind(context);
			checks.push(funcCheck);
		}
		return checks;
	};

	Tyruswoo.BigChoiceLists.EventListFilter.prototype._getCompFunction =
	function(comparator) {
		switch(comparator) {
			case '<':
				return (a, b) => a < b;
				break;
			case '<=':
				return (a, b) => a <= b;
				break;
			case '==':
				return (a, b) => a == b;
				break;
			case '>=':
				return (a, b) => a >= b;
				break;
			case '>':
				return (a, b) => a > b;
				break;
			case '!=':
				return (a, b) => a != b;
				break;
			default:
				throw new Error("Unrecognized comparison operator: " + comparator);
		}
	};

	//=============================================================================
	// Combine consecutive choice lists
	//=============================================================================
	// Game_Interpreter: Combine choice params and reference choices by name
	//-----------------------------------------------------------------------------

	// Sidestep Switchable Text's changes to setupChoices, if already made.
	if (Imported.McKathlin_SwitchableText) {
		Tyruswoo.BigChoiceLists.Game_Interpreter_setupChoices =
			McKathlin.SwitchableText.Game_Interpreter_setupChoices;
	} else {
		Tyruswoo.BigChoiceLists.Game_Interpreter_setupChoices = 
			Game_Interpreter.prototype.setupChoices;
	}

	// Alias method. Alias defined above.
	Game_Interpreter.prototype.setupChoices = function(params) {
		Tyruswoo.BigChoiceLists.applyNextWindowSettings();
		params = this.gatherChoiceParams();
		return Tyruswoo.BigChoiceLists.Game_Interpreter_setupChoices.call(
			this, params);
	};

	// New helper method
	Game_Interpreter.prototype.gatherChoiceParams = function() {
		const CANCEL_BRANCH = -2;
		const DISALLOW_CANCEL = -1;
		const NO_DEFAULT = -1;

		this._addOnChoiceIndexes = [];
		const startParams = this.currentCommand().parameters;
		var choiceListSoFar = [];
		var cancelChoiceSoFar = DISALLOW_CANCEL;
		var defaultChoiceSoFar = NO_DEFAULT;
		for (let i = this._index;
			 i < this._list.length;
			 i = this.nextChoiceIndexAfter(i)) {
			let myParams = this._list[i].parameters;
			let myChoiceList = myParams[0];
			let myCancelChoice = myParams[1];
			let myDefaultChoice = myParams[2];

			// Combine choice lists.
			choiceListSoFar.push(...myChoiceList);

			// Update cancel index.
			if (cancelChoiceSoFar < 0) {
				// A cancel type of Disallow or Branch can be overridden
				// by a sublist's cancel index.
				if (myCancelChoice >= 0) {
					// It has the cancel choice's index on the original list.
					// Temporarily store the cancel choice's string value.
					cancelChoiceSoFar = myChoiceList[myCancelChoice];
				} else if (CANCEL_BRANCH == myCancelChoice) {
					cancelChoiceSoFar = CANCEL_BRANCH;
				}
			}

			// A default type of None can be overridden.
			if (defaultChoiceSoFar < 0) {
				if (myDefaultChoice >= 0) {
					// Temporarily store the default choice's string value.
					defaultChoiceSoFar = myChoiceList[myDefaultChoice];
				}
			}

			this._addOnChoiceIndexes.push(i);
		} // endfor each consecutive choice list command

		// Now that all is gathered,
		// Filter the combined choice list.
		const filter = Tyruswoo.BigChoiceLists.takeNextFilter();
		choiceListSoFar = filter.filterList(choiceListSoFar);

		// Get the index for the cancel option, if applicable.
		if ('string' == typeof cancelChoiceSoFar) {
			cancelChoiceSoFar = choiceListSoFar.findIndex(
				element => element == cancelChoiceSoFar);
		}

		// Get the index for the default option, if applicable.
		if ('string' == typeof defaultChoiceSoFar) {
			defaultChoiceSoFar = choiceListSoFar.findIndex(
				element => element == defaultChoiceSoFar);
			if (defaultChoiceSoFar < 0) {
				// The first list item is the DEFAULT default.
				// Use it if the intended default was filtered out.
				defaultChoiceSoFar = 0;
			}
		}

		const combinedParams = [
			choiceListSoFar,
			cancelChoiceSoFar,
			defaultChoiceSoFar,
			startParams[3],
			startParams[4]
		];
		return combinedParams;
	};

	// New helper method
	Game_Interpreter.prototype.nextChoiceIndexAfter = function(prevChoiceIndex) {
		const NOT_FOUND_INDEX = this._list.length;
		for (let i = prevChoiceIndex + 1; i < this._list.length; i++) {
			let command = this._list[i];
			if (command.indent < this._indent) {
				return NOT_FOUND_INDEX; // Our branch has ended.
			} else if (command.indent > this._indent) {
				continue; // Skip everything inside our choice branches.
			}

			if (command.code >= 402 && command.code <= 404) {
				// 402, 403, and 404 are choice branch commands.
				continue; // Skip them.
			} else if (102 == command.code) {
				return i; // Found the next choice list!
			} else {
				// This is something other than a choice command,
				// so it marks the end of this choice list.
				return NOT_FOUND_INDEX;
			}
		} // endfor index i until end of list
		// We've reached the end of the command list. Still not found.
		return NOT_FOUND_INDEX;
	};

	// Alias method
	Tyruswoo.BigChoiceLists.Game_Interpreter_command102 =
		Game_Interpreter.prototype.command102;
	Game_Interpreter.prototype.command102 = function(params) {
		if (this._addOnChoiceIndexes.includes(this._index)) {
			// This choice list has already been combined with
			// the choice list at the head of its chain.
			// So it can be ignored now.
			return true;
		}
		return Tyruswoo.BigChoiceLists.Game_Interpreter_command102.call(
			this, params);
	};

	// Replacement method
	// When [**]
	// Branch name is read instead of branch index.
	Game_Interpreter.prototype.command402 = function(params) {
		if (this._branch[this._indent] !== params[1]) {
			this.skipBranch();
		}
		return true;
	};

	// Replacement method
	// When Cancel
	// The cancel branch is the only branch represented by an empty string.
	Game_Interpreter.prototype.command403 = function() {
		if (this._branch[this._indent] !== "") {
			this.skipBranch();
		}
		return true;
	};

	//-----------------------------------------------------------------------------
	// Game_Message: Accommodations for string-based choice types.
	//-----------------------------------------------------------------------------

	// Replacement method
	Game_Message.prototype.onChoice = function(index) {
		if (this._choiceCallback) {
			// Windows work in indexes,
			// but the interpreter references callbacks by choice name.
			// So we translate here.
			let name = this._choices[index] || "";
			this._choiceCallback(name);
			this._choiceCallback = null;
		}
	};

	//=============================================================================
	// Choice List Window wide mode
	//=============================================================================

	// New method
	Window_ChoiceList.prototype.isWideMode = function() {
		return $gameMessage.isChoiceWideWindow();
	};

	Tyruswoo.BigChoiceLists.Window_ChoiceList_drawItem =
		Window_ChoiceList.prototype.drawItem;
	Window_ChoiceList.prototype.drawItem = function(index) {
		if (this.isWideMode()) {
			const rect = this.itemLineRect(index);
			var text = this.commandName(index);
			text = this.convertEscapeCharacters(text)
			this.drawText(text, rect.x, rect.y, rect.width, 'left');
		} else {
			Tyruswoo.BigChoiceLists.Window_ChoiceList_drawItem.call(this, index);
		}
	};

	// Alias method
	Tyruswoo.BigChoiceLists.Window_ChoiceList_windowY =
		Window_ChoiceList.prototype.windowY;
	Window_ChoiceList.prototype.windowY = function() {
		if ("Opposite" == $gameMessage.choiceVerticalPlacement()) {
			if (this._messageWindow.y >= Graphics.boxHeight / 2) {
				// Make choice window touch top of screen.
				return 0;
			} else {
				// Make choice window touch bottom of screen.
				return Graphics.boxHeight - this.windowHeight();
			}
		} else {
			return Tyruswoo.BigChoiceLists.Window_ChoiceList_windowY.call(this);
		}
	};

	// Alias method
	Tyruswoo.BigChoiceLists.Window_ChoiceList_windowWidth =
		Window_ChoiceList.prototype.windowWidth;
	Window_ChoiceList.prototype.windowWidth = function() {
		if (this.isWideMode()) {
			return this._messageWindow.width;
		} else {
			return Tyruswoo.BigChoiceLists.Window_ChoiceList_windowWidth.call(
				this);
		}
	};

	// Alias method
	Tyruswoo.BigChoiceLists.Window_ChoiceList_maxCols =
		Window_ChoiceList.prototype.maxCols;
	Window_ChoiceList.prototype.maxCols = function() {
		if (this.isWideMode()) {
			return $gameMessage.choiceColumnCount();
		} else {
			return Tyruswoo.BigChoiceLists.Window_ChoiceList_maxCols.call(this);
		}
	};

	// Replacement method
	Window_ChoiceList.prototype.numVisibleRows = function() {
		const rowStyle = $gameMessage.choiceRowStyle();
		if ("Fit" == rowStyle) {
			const choices = $gameMessage.choices();
			const totalRowCount = Math.ceil(choices.length / this.maxCols());
			return Math.min(totalRowCount, this.maxLines());
		} else if ("Max" == rowStyle) {
			return this.maxLines();
		} else { // rowStyle is an exact number of rows.
			return Number(rowStyle);
		}
	}

})();
