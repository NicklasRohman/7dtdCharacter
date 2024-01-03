///////// Intellect
let electrocutionerLevel = 0;
let roboticsInventorLevel = 0;
let calculatedAttackLevel = 0;
let betterBarterLevel = 0;
let theDaringAdventurerLevel = 0;
let charismaticNatureLevel = 0;
let physicianLevel = 0;
let advancedEngineeringLevel = 0;
let greaseMonkeyLevel = 0;
let lockPickingLevel = 0;

function GetIntellectCell(skill, skillLevel) {
  SetIntellectPerkLevel(skill, skillLevel);
  ChangeIntellectLevel();
  UpdateUsedPoints();

  document.querySelectorAll(`#${skill}Table .select-level`).forEach((cell) => {
    cell.classList.remove("current-level");
  });

  const currentCell = document.querySelector(
    `#${skill}Table .select-level:nth-child(${skillLevel + 2})`
  );
  currentCell.classList.add("current-level");
}

function ChangeIntellectLevel() {
  let FiveLevelPerks = this.HighetsFiveLevelPerks(
    electrocutionerLevel,
    betterBarterLevel,
    charismaticNatureLevel,
    advancedEngineeringLevel,
    greaseMonkeyLevel
  );

  let FourLevelPerks = HighetsFourLevelPerks(
    theDaringAdventurerLevel,
    physicianLevel
  );

  let ThreeLevelPerks = HighetsThreeLevelPerks(lockPickingLevel);

  let RoboticsInventorPerk = HighetsRoboticsInventorPerk(roboticsInventorLevel);
  let CalculatedAttackPerk = HighetsCalculatedAttackPerk(calculatedAttackLevel);

  if (FiveLevelPerks > FourLevelPerks) {
    if (FiveLevelPerks > ThreeLevelPerks) {
      if (FiveLevelPerks > RoboticsInventorPerk) {
        if (FiveLevelPerks > CalculatedAttackPerk) {
          IntellectFivePerkLevels(FiveLevelPerks);
        } else {
          CalculatedAttackPerkLevels(CalculatedAttackPerk);
        }
      } else {
        if (RoboticsInventorPerk > CalculatedAttackPerk) {
          RoboticsInventorPerkLevels(RoboticsInventorPerk);
        } else {
          CalculatedAttackPerkLevels(CalculatedAttackPerk);
        }
      }
    } else {
      if (ThreeLevelPerks > RoboticsInventorPerk) {
        IntellectThreePerkLevels(ThreeLevelPerks);
      } else {
        if (RoboticsInventorPerk > CalculatedAttackPerk) {
          RoboticsInventorPerkLevels(RoboticsInventorPerk);
        } else {
          CalculatedAttackPerkLevels(CalculatedAttackPerk);
        }
      }
    }
  } else {
    if (FourLevelPerks > ThreeLevelPerks) {
      IntellectFourPerkLevels(FourLevelPerks);
    } else {
      if (ThreeLevelPerks > RoboticsInventorPerk) {
        IntellectThreePerkLevels(ThreeLevelPerks);
      } else {
        if (RoboticsInventorPerk > CalculatedAttackPerk) {
          RoboticsInventorPerkLevels(RoboticsInventorPerk);
        } else {
          CalculatedAttackPerkLevels(CalculatedAttackPerk);
        }
      }
    }
  }

  const selector = `#intellectTable .select-level:nth-child(${intellectLevel})`;
  const currentCell = document.querySelector(selector);

  if (currentCell) {
    document
      .querySelectorAll(`#intellectTable .select-level`)
      .forEach((cell) => {
        if (cell !== currentCell) {
          cell.classList.remove("green-background");
        }
      });

    currentCell.classList.add("green-background");
  } else {
    console.log("Element not found!");
  }
}

function SetIntellectPerkLevel(skill, skillLevel) {
  if (skill === "electrocutioner") {
    electrocutionerLevel = skillLevel;
  } else if (skill === "roboticsInventor") {
    roboticsInventorLevel = skillLevel;
  } else if (skill === "calculatedAttack") {
    calculatedAttackLevel = skillLevel;
  } else if (skill === "betterBarter") {
    betterBarterLevel = skillLevel;
  } else if (skill === "theDaringAdventurer") {
    theDaringAdventurerLevel = skillLevel;
  } else if (skill === "charismaticNature") {
    charismaticNatureLevel = skillLevel;
  } else if (skill === "physician") {
    physicianLevel = skillLevel;
  } else if (skill === "advancedEngineering") {
    advancedEngineeringLevel = skillLevel;
  } else if (skill === "greaseMonkey") {
    greaseMonkeyLevel = skillLevel;
  } else if (skill === "lockPicking") {
    lockPickingLevel = skillLevel;
  }
}

function IntellectFivePerkLevels(level) {
  if (level === 0) {
    intellectLevel = 1;
    intellectPoints = 0;
  } else if (level === 1) {
    intellectLevel = 1;
    intellectPoints = 1;
  } else if (level === 3) {
    intellectLevel = 3;
    intellectPoints = 2;
  } else if (level === 5) {
    intellectLevel = 5;
    intellectPoints = 4;
  } else if (level === 7) {
    intellectLevel = 7;
    intellectPoints = 8;
  } else if (level === 10) {
    intellectLevel = 10;
    intellectPoints = 16;
  }
}

function IntellectFourPerkLevels(level) {
  if (level === 0) {
    intellectLevel = 1;
    intellectPoints = 0;
  } else if (level === 1) {
    intellectLevel = 1;
    intellectPoints = 1;
  } else if (level === 4) {
    intellectLevel = 4;
    intellectPoints = 3;
  } else if (level === 6) {
    intellectLevel = 6;
    intellectPoints = 6;
  } else if (level === 8) {
    intellectLevel = 8;
    intellectPoints = 10;
  }
}

function IntellectThreePerkLevels(level) {
  if (level === 0) {
    intellectLevel = 1;
    intellectPoints = 0;
  } else if (level === 1) {
    intellectLevel = 1;
    intellectPoints = 1;
  } else if (level === 4) {
    intellectLevel = 4;
    intellectPoints = 3;
  } else if (level === 7) {
    intellectLevel = 7;
    intellectPoints = 8;
  }
}

function RoboticsInventorPerkLevels(level) {
  if (level === 0) {
    intellectLevel = 1;
    intellectPoints = 0;
  } else if (level === 3) {
    intellectLevel = 3;
    intellectPoints = 2;
  } else if (level === 5) {
    intellectLevel = 5;
    intellectPoints = 4;
  } else if (level === 6) {
    intellectLevel = 6;
    intellectPoints = 7;
  } else if (level === 8) {
    intellectLevel = 8;
    intellectPoints = 10;
  } else if (level === 10) {
    intellectLevel = 10;
    intellectPoints = 16;
  }
}

function CalculatedAttackPerkLevels(level) {
  if (level === 0) {
    intellectLevel = 1;
    intellectPoints = 0;
  } else if (level === 4) {
    intellectLevel = 4;
    intellectPoints = 3;
  } else if (level === 7) {
    intellectLevel = 7;
    intellectPoints = 8;
  } else if (level === 10) {
    intellectLevel = 10;
    intellectPoints = 16;
  }
}

function HighetsRoboticsInventorPerk() {
  if (arguments.length === 0) {
    return 0; // Inget värde att jämföra
  }
  var highestLevel = Math.max(...arguments);

  if (highestLevel === 5) {
    return 10;
  } else if (highestLevel === 4) {
    return 8;
  } else if (highestLevel === 3) {
    return 6;
  } else if (highestLevel === 2) {
    return 5;
  } else if (highestLevel === 1) {
    return 3;
  }
  return 0;
}

function HighetsCalculatedAttackPerk() {
  if (arguments.length === 0) {
    return 0; // Inget värde att jämföra
  }
  var highestLevel = Math.max(...arguments);

  if (highestLevel === 3) {
    return 10;
  } else if (highestLevel === 2) {
    return 7;
  } else if (highestLevel === 1) {
    return 4;
  }
  return 0;
}
