# DnD 5e Combat Tracker
Web Based DnD Combat Tracker

## Features
* Character Creation
    * Create NPC and PCs
    * Keep track of attributes, weapons, and spells
* Encounter Creation
    * Bundle of enemies that can be loaded in to the combat tracker quickly
* Combat Tracking
    * Track
        * turn order
        * active statuses
        * reactions
        * combat time
    * Automatically generate hit and damage rolls for NPCs
    * Let PCs make their own rolls
    * Quick reference
        * statuses
        * spells
        * and more
* Load and parse SRD documentation

## Technology

## Setup

## Basic Combat Flow
* Player selects action
* chooses target if necessary
* test if action succeeds or fails
* resolve effects of the action

## Combat Examples
* Basic Sword Attack
    * Select Attack Action
    * Select Weapon, if applicable
    * Select Target
    * Test for Action Success
        * Need to compute DC players roll needs to beat
        * figure out if attack has advantage based on target's statuses
        * since this is an attack look at attribute field of the action, which should be armorclass
        * compute targets armor class using statuses, this is the DC
        * If player display DC and success button and a failure button, click appropriate button based on what player rolled
        * If npc roll dice d20 + weapon.attribute bonus + proficiency, disply roll and DC present success and failure button if want to fudge roll
        * After DM click success or failure log to combat log for display
    * Resolve Effects Based on Success or Failure
        * If Success, resolve target and source effects, for basic sword only target effects
        * this is a basic attack so only damage effect
        * Compute damage dice based on weapon (weapon.dice) and any other statuses, ask player result, they will probably include bonuses
        * if npc compute and roll damage dice
        * check if target has statuses that resist this type of damage, or have weakness to this type of damage
        * claculate total damage based on resistances/weaknesses
        * dispaly input for damage amount, and select for damage type, notes on if target weak or resistant, actual roll with bonus, button to apply damage
        * after DM clicks apply button log to combat log for display
* Healing Word
    * Select Spells, select Healing Word
    * Select casting level
    * Select target
    * No need to check for success
    * Reslove target effect
        * roll dice listed on casting_level X spell.dice + character.spell modifier
* Second Wind
* Chaos Bolt
    * Select spells, select Choas Bolt
    * select casting level and target
    * Test for Action Success
        * Compute AC of Target
        * check if attack has advantage/disadvantage
        * handle like sword attack from above
        * roll d20 + spell attack modifier, different for each class
        * accept success or failure
    * Resolve Effects
        * determine damage roll spell.dice X casting_level
        * resolve spell effects, examine d/8s can pick damage based on d8s and table
        * going to have to write custom javascript for some spells, like this one
* Bane
* Sleep
* Barbarian Rage
* Hunter's Mark
