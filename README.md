# Tyruswoo Big Choice Lists for RPG Maker MZ

Now your Show Choices lists can include as many choices as you like!

Choices can appear next to the message window, across from the message window, or in the default side position.

You can even generate choice lists from a list of switches, based on whether the switches are on or off!

## Compatibility

This plugin is fully cross-compatible with `McKathlin_SwitchableText.js`,
regardless of their order relative to each other in the plugin list.
Using both together lets you make big choice lists with in which the
choices conditionally hide, show, or change their text.

This plugin coordinates with `Tyruswoo_EventAI.js` for the plugin command
List Events from Map. It doesn't matter where `Tyruswoo_BigChoiceLists` is
on the plugin list relative to `Tyruswoo_EventAI` or any other Tyruswoo or
McKathlin plugin.

Non-Tyruswoo plugins that directly alter the way choice lists are built
and displayed may conflict with Big Choice Lists. If these conflicts
persist after you've placed `Tyruswoo_BigChoiceLists.js` **below** other
choice list altering plugins, talk with us at Tyruswoo.com and we'll do our
best to help you.

## Overview

This plugin enables choice lists to show any number of choices,
in customized scrolling windows.
* Put multiple Show Choices commands one after the other, and the choices
  in them will show up together in one choice list.
* Use the Wide Choice List plugin command, and the next choice list shown
  will be as wide as the message window, and will display the choices in
  as many columns and visible rows as you specify in the plugin command.

Using Big Choice Lists with other plugins:
* McKathlin Switchable Text snippets can alter or hide each choice in the
  list, based on a given condition.
* The plugin command List Events from Map requires Tyruswoo_EventAI.js.
  It loads the names of events from a map, filtered by the events'
  self switches or self variables.

## Step by Step

### How to Make a List of Ten Choices
1. Open the Event Editor, and start setting up a choice list as you usually
   would: make a Show Text command to put the text that will display while
   the choices are on screen, and then make a Show Choices command with the
   first six choices you want in your list.
2. If your default choice is among the first six choices, set it now.
   If not, set Default to None.
3. If your cancel choice is among the first six choices, set it now.
   If not, set Cancel to Disallow.
4. Find the end of the choice branches just generated, and put another
   Show Choices command directly after the end of these choice branches.
   This is where you'll put your last four choices.
5. If your Default choice is among these last four choices, set it now.
   When multiple Show Choices commands are combined, the 1st Default that
   isn't None takes precedence.
6. If your Cancel choice is among the last four choices, set it now.
   If your Cancel choice was earlier in the list or you want to disallow
   cancelling, choose Disallow. If you want Cancel to have its own branch,
   the last Show Choices command of the chain is a good place to put it.
   (If more than one Show Choices command in a chain has a Cancel branch,
   then ALL cancel branches in the chain will run, one by one, after the
   player chooses Cancel.)

Lists with any number of choices work similarly: place Show Choices
commands one after another, and set Default and Cancel choices in the
Show Choices commands that contain them. There is no set limit to how many
you can line up and combine into a long choice list.

By themselves, the above steps will make a long choice list that's displayed
in a scrolling single-column window no wider than the widest choice text.
To give them a wide multi-column display, read on.

### How to Display a Choice List in a Wide, Multi-column Window

1. Set up your message text and choice list as described in the how-to
   above.
2. Directly **before** the message text that accompanies the choice list,
   create a plugin command. Select the plugin Tyruswoo_BigChoiceLists,
   and the command Wide Choice List.
3. The following arguments appear in the table: Column Count (set to 2),
   Visible Row Count (set to Fit), and Vertical Placement (set to Adjacent).
   If you'd like to change the number of columns or rows, double click on
   these arguments to change them. If you want some space showing in the
   middle of the screen between the message window and the Big Choice List,
   double click on Vertical Placement and choose Opposite.
4. Click OK at the bottom of the Plugin Command dialog box. You're all set!

A Wide Choice List plugin command affects only the next choice list window
that shows up. Other choice lists in this event and others are unaffected.

**Bonus tip:** If you want to alter or hide some choices based on self switches,
game switches, or variables, McKathlin's Switchable Text plugin has the
tools for the job. It's available on [Tyruswoo.com](https://www.tyruswoo.com).

### How To Make a Big Choice List that Shows Known, Incomplete Quests

1. Decide on the names of the quests you want available for discussion,
   and then set up two lists of switches for them: one for whether each
   quest is known, and another for whether each quest is complete.
   For example, a quest named "Bring Me a Shrubbery" could have a switch
   in the Known group called "Known: Bring Me a Shrubbery", and a switch
   in the Done group called "Done: Bring Me a Shrubbery".
2. Throughout your game, when the player becomes aware of some quest,
   turn that quest's Known switch ON. When the player completes a quest,
   turn the quest's Done switch ON.
3. Now you're ready to set up a big choice list of quests.
   Suppose the hero has a wise advisor to discuss quests with, and this
   big choice list is how the hero chooses which quest to discuss.
   Create a plugin command, and pick this plugin's "List Switches".
4. Set the switch groups. For the Known group, identify the first switch
   and last switch of the range, require switch state ON, and set the prefix
   to "Known: ". This prefix will be expected at the beginning of the switch
   name, but excluded from the beginning of the corresponding list item.
   For the Done group, set the range, require switch state OFF so that only
   incomplete quests will show up, and set the prefix to "Done: ".
5. Now that your switch groups are set up, ensure that Matching Rule is set
   to "Match All Groups". Using this rule ensures that only quests that are
   known AND unfinished will show up on the list.
6. In the Always Show argument, list any choices that aren't affected by
   filters. These needn't be in the quest switches. Always Show choices
   can be useful for links to other topics, or to end the conversation.
7. Choose your list display settings: Column Count, Visible Row Count, and
   Vertical Placement, the same way you would set them for the Wide Choice
   List plugin command. Once you're done customizing, click OK.
8. Now set up a Show Text command if desired, and as many Show Choices
   commands as you need to list all questlines. Make sure the choices
   on the list match the names of your questline events (minus prefixes and
   postfixes) or Always Show choices exactly, or they'll be filtered out!
9. Fill each resulting choice branch with any discussion you have in mind
   for that questline.

### For more help using this plugin, see [Tyruswoo.com](https://www.tyruswoo.com).

## Version History

**v1.0**  3/10/2023
- Big Choice Lists released for RPG Maker MZ!
- Combine multiple Show Choices commands to make a long choice list!
- Display multi-column choice lists!
- Fully compatible with Switchable Text.
- List Switches plugin command filters by switch state.

> **Remember, only you can build your dreams!**
>
> *Tyruswoo*