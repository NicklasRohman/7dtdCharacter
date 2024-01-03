let usedPoints = 0;
let perceptionLevel = 1;
let perceptionPoints = 0;
let strengthLevel = 1;
let strengthPoints = 0;
let fortitudeLevel = 1;
let fortitudePoints = 0;
let agilityLevel = 1;
let agilityPoints = 0;
let intellectLevel = 1;
let intellectPoints = 0;

///////// Preception
let deadEyeLevel = 0;
let demolitionsExpertLevel = 0;
let spearMasterLevel = 0;
let quickAndPerceptiveLevel = 0;
let theInfiltratorLevel = 0;
let animalTrackerLevel = 0;
let thePenetratorLevel = 0;
let luckyLooterLevel = 0;
let treasureHunterLevel = 0;
let salvageOperationsLevel = 0;

function GetPreceptionCell(skill, skillLevel) {
  SetPreceptionPerkLevel(skill, skillLevel);
  ChangePerceptionLevel();

  UpdateUsedPoints();

  document.querySelectorAll(`#${skill}Table .select-level`).forEach((cell) => {
    cell.classList.remove("current-level");
  });

  const currentCell = document.querySelector(
    `#${skill}Table .select-level:nth-child(${skillLevel + 2})`
  );
  currentCell.classList.add("current-level");
}

function ChangePerceptionLevel() {
  let FiveLevelPerks = HighetsFiveLevelPerks(
    deadEyeLevel,
    demolitionsExpertLevel,
    spearMasterLevel,
    luckyLooterLevel,
    salvageOperationsLevel
  );

  let FourLevelPerks = HighetsFourLevelPerks(
    thePenetratorLevel,
    luckyLooterLevel,
    treasureHunterLevel
  );

  let ThreeLevelPerks = HighetsThreeLevelPerks(
    quickAndPerceptiveLevel,
    theInfiltratorLevel,
    animalTrackerLevel,
    treasureHunterLevel
  );

  if (FiveLevelPerks > FourLevelPerks) {
    if (FiveLevelPerks > ThreeLevelPerks) {
      PreceptionFivePerkLevels(FiveLevelPerks);
    } else {
      PreceptionThreePerkLevels(ThreeLevelPerks);
    }
  } else {
    if (FourLevelPerks > ThreeLevelPerks) {
      PreceptionFourPerkLevels(FourLevelPerks);
    } else {
      PreceptionThreePerkLevels(ThreeLevelPerks);
    }
  }

  const selector = `#perceptionTable .select-level:nth-child(${perceptionLevel})`;
  const currentCell = document.querySelector(selector);

  if (currentCell) {
    document
      .querySelectorAll(`#perceptionTable .select-level`)
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

function SetPreceptionPerkLevel(skill, skillLevel) {
  if (skill === "deadEye") {
    deadEyeLevel = skillLevel;
  } else if (skill === "demolitionsExpert") {
    demolitionsExpertLevel = skillLevel;
  } else if (skill === "spearMaster") {
    spearMasterLevel = skillLevel;
  } else if (skill === "quickAndPerceptive") {
    quickAndPerceptiveLevel = skillLevel;
  } else if (skill === "infiltrator") {
    theInfiltratorLevel = skillLevel;
  } else if (skill === "animalTracker") {
    animalTrackerLevel = skillLevel;
  } else if (skill === "penetrator") {
    thePenetratorLevel = skillLevel;
  } else if (skill === "luckyLooter") {
    luckyLooterLevel = skillLevel;
  } else if (skill === "treasureHunter") {
    treasureHunterLevel = skillLevel;
  } else if (skill === "salvageOperations") {
    salvageOperationsLevel = skillLevel;
  }
}

function PreceptionFivePerkLevels(level) {
  if (level === 0) {
    perceptionLevel = 1;
    perceptionPoints = 0;
  } else if (level === 1) {
    perceptionLevel = 1;
    perceptionPoints = 1;
  } else if (level === 3) {
    perceptionLevel = 3;
    perceptionPoints = 2;
  } else if (level === 5) {
    perceptionLevel = 5;
    perceptionPoints = 4;
  } else if (level === 7) {
    perceptionLevel = 7;
    perceptionPoints = 8;
  } else if (level === 10) {
    perceptionLevel = 10;
    perceptionPoints = 16;
  }
}

function PreceptionFourPerkLevels(level) {
  if (level === 0) {
    perceptionLevel = 1;
    perceptionPoints = 0;
  } else if (level === 1) {
    perceptionLevel = 1;
    perceptionPoints = 1;
  } else if (level === 4) {
    perceptionLevel = 4;
    perceptionPoints = 3;
  } else if (level === 6) {
    perceptionLevel = 6;
    perceptionPoints = 6;
  } else if (level === 8) {
    perceptionLevel = 8;
    perceptionPoints = 10;
  }
}

function PreceptionThreePerkLevels(level) {
  if (level === 0) {
    perceptionLevel = 1;
    perceptionPoints = 0;
  } else if (level === 1) {
    perceptionLevel = 1;
    perceptionPoints = 1;
  } else if (level === 4) {
    perceptionLevel = 4;
    perceptionPoints = 3;
  } else if (level === 7) {
    perceptionLevel = 7;
    perceptionPoints = 8;
  }
}

///////// Strength
let boomstickLevel = 0;
let pummelPeteLevel = 0;
let skullCrusherLevel = 0;
let bigAndFastLevel = 0;
let heavyArmorLevel = 0;
let packMuleLevel = 0;
let masterChefLevel = 0;
let miner69erLevel = 0;
let motherLodeLevel = 0;

function GetStrengthCell(skill, skillLevel) {
  SetStrengthPerkLevel(skill, skillLevel);
  ChangeStrengthLevel();
  UpdateUsedPoints();

  document.querySelectorAll(`#${skill}Table .select-level`).forEach((cell) => {
    cell.classList.remove("current-level");
  });

  const currentCell = document.querySelector(
    `#${skill}Table .select-level:nth-child(${skillLevel + 2})`
  );
  currentCell.classList.add("current-level");
}

function ChangeStrengthLevel() {
  let FiveLevelPerks = HighetsFiveLevelPerks(
    boomstickLevel,
    pummelPeteLevel,
    skullCrusherLevel,
    packMuleLevel,
    miner69erLevel,
    motherLodeLevel
  );

  let FourLevelPerks = HighetsFourLevelPerks(heavyArmorLevel);

  let ThreeLevelPerks = HighetsThreeLevelPerks(
    bigAndFastLevel,
    masterChefLevel
  );

  if (FiveLevelPerks > FourLevelPerks) {
    if (FiveLevelPerks > ThreeLevelPerks) {
      StrengthFivePerkLevels(FiveLevelPerks);
    } else {
      StrengthThreePerkLevels(ThreeLevelPerks);
    }
  } else {
    if (FourLevelPerks > ThreeLevelPerks) {
      StrengthFourPerkLevels(FourLevelPerks);
    } else {
      StrengthThreePerkLevels(ThreeLevelPerks);
    }
  }

  const selector = `#strengthTable .select-level:nth-child(${strengthLevel})`;
  const currentCell = document.querySelector(selector);

  if (currentCell) {
    document
      .querySelectorAll(`#strengthTable .select-level`)
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

function SetStrengthPerkLevel(skill, skillLevel) {
  if (skill === "boomstick") {
    boomstickLevel = skillLevel;
  } else if (skill === "pummelPete") {
    pummelPeteLevel = skillLevel;
  } else if (skill === "skullCrusher") {
    skullCrusherLevel = skillLevel;
  } else if (skill === "bigAndFast") {
    bigAndFastLevel = skillLevel;
  } else if (skill === "heavyArmor") {
    heavyArmorLevel = skillLevel;
  } else if (skill === "packMule") {
    packMuleLevel = skillLevel;
  } else if (skill === "masterChef") {
    masterChefLevel = skillLevel;
  } else if (skill === "miner69er") {
    miner69erLevel = skillLevel;
  } else if (skill === "motherLode") {
    motherLodeLevel = skillLevel;
  }
}

function StrengthFivePerkLevels(level) {
  if (level === 0) {
    strengthLevel = 1;
    strengthPoints = 0;
  } else if (level === 1) {
    strengthLevel = 1;
    strengthPoints = 1;
  } else if (level === 3) {
    strengthLevel = 3;
    strengthPoints = 2;
  } else if (level === 5) {
    strengthLevel = 5;
    strengthPoints = 4;
  } else if (level === 7) {
    strengthLevel = 7;
    strengthPoints = 8;
  } else if (level === 10) {
    strengthLevel = 10;
    strengthPoints = 16;
  }
}

function StrengthFourPerkLevels(level) {
  if (level === 0) {
    strengthLevel = 1;
    strengthPoints = 0;
  } else if (level === 1) {
    strengthLevel = 1;
    strengthPoints = 1;
  } else if (level === 4) {
    strengthLevel = 4;
    strengthPoints = 3;
  } else if (level === 6) {
    strengthLevel = 6;
    strengthPoints = 6;
  } else if (level === 8) {
    strengthLevel = 8;
    strengthPoints = 10;
  }
}

function StrengthThreePerkLevels(level) {
  if (level === 0) {
    strengthLevel = 1;
    strengthPoints = 0;
  } else if (level === 1) {
    strengthLevel = 1;
    strengthPoints = 1;
  } else if (level === 4) {
    strengthLevel = 4;
    strengthPoints = 3;
  } else if (level === 7) {
    strengthLevel = 7;
    strengthPoints = 8;
  }
}

///////// Fortitude
let theBrawlerLevel = 0;
let machineGunnerLevel = 0;
let lightningHandsLevel = 0;
let theHuntsmanLevel = 0;
let wellInsulatedLevel = 0;
let livingOffTheLandLevel = 0;
let painToleranceLevel = 0;
let healingFactorLevel = 0;
let ironGutLevel = 0;
let rule1CardioLevel = 0;

function GetFortitudeCell(skill, skillLevel) {
  SetFortitudePerkLevel(skill, skillLevel);
  ChangeFortitudeLevel();
  UpdateUsedPoints();

  document.querySelectorAll(`#${skill}Table .select-level`).forEach((cell) => {
    cell.classList.remove("current-level");
  });

  const currentCell = document.querySelector(
    `#${skill}Table .select-level:nth-child(${skillLevel + 2})`
  );
  currentCell.classList.add("current-level");
}

function ChangeFortitudeLevel() {
  let FiveLevelPerks = HighetsFiveLevelPerks(
    theBrawlerLevel,
    machineGunnerLevel,
    theHuntsmanLevel,
    painToleranceLevel,
    healingFactorLevel,
    ironGutLevel
  );

  let ThreeLevelPerks = HighetsThreeLevelPerks(
    wellInsulatedLevel,
    rule1CardioLevel
  );

  let livingOffTheLandPerk = HighetsLivingOfTheLandLevelPerks(
    livingOffTheLandLevel
  );

  let lightningHandsPerk = HighetsLightningHandsLevelPerks(lightningHandsLevel);

  if (FiveLevelPerks > ThreeLevelPerks) {
    if (FiveLevelPerks > livingOffTheLandPerk) {
      if (FiveLevelPerks > lightningHandsPerk) {
        FortitudeFivePerkLevels(FiveLevelPerks);
      } else {
        FortitudeLightningHandsPerkLevel(lightningHandsPerk);
      }
    } else {
      if (livingOffTheLandPerk > lightningHandsPerk) {
        FortitudeLivingOfTheLandPerkLevels(livingOffTheLandPerk);
      } else {
        FortitudeLightningHandsPerkLevel(lightningHandsPerk);
      }
    }
  } else {
    if (ThreeLevelPerks > livingOffTheLandPerk) {
      if (ThreeLevelPerks > lightningHandsPerk) {
        FortitudeThreePerkLevels(ThreeLevelPerks);
      } else {
        FortitudeLightningHandsPerkLevel(lightningHandsPerk);
      }
    } else {
      if (livingOffTheLandPerk > lightningHandsPerk) {
        FortitudeLivingOfTheLandPerkLevels(livingOffTheLandPerk);
      } else {
        FortitudeLightningHandsPerkLevel(lightningHandsPerk);
      }
    }
  }

  const selector = `#fortitudeTable .select-level:nth-child(${fortitudeLevel})`;
  const currentCell = document.querySelector(selector);

  if (currentCell) {
    document
      .querySelectorAll(`#fortitudeTable .select-level`)
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

function SetFortitudePerkLevel(skill, skillLevel) {
  if (skill === "theBrawler") {
    theBrawlerLevel = skillLevel;
  } else if (skill === "machineGunner") {
    machineGunnerLevel = skillLevel;
  } else if (skill === "lightningHands") {
    lightningHandsLevel = skillLevel;
  } else if (skill === "theHuntsman") {
    theHuntsmanLevel = skillLevel;
  } else if (skill === "wellInsulated") {
    wellInsulatedLevel = skillLevel;
  } else if (skill === "livingOffTheLand") {
    livingOffTheLandLevel = skillLevel;
  } else if (skill === "painTolerance") {
    painToleranceLevel = skillLevel;
  } else if (skill === "healingFactor") {
    healingFactorLevel = skillLevel;
  } else if (skill === "ironGut") {
    ironGutLevel = skillLevel;
  } else if (skill === "rule1Cardio") {
    rule1CardioLevel = skillLevel;
  }
}

function FortitudeFivePerkLevels(level) {
  if (level === 0) {
    fortitudeLevel = 1;
    fortitudePoints = 0;
  } else if (level === 1) {
    fortitudeLevel = 1;
    fortitudePoints = 1;
  } else if (level === 3) {
    fortitudeLevel = 3;
    fortitudePoints = 2;
  } else if (level === 5) {
    fortitudeLevel = 5;
    fortitudePoints = 4;
  } else if (level === 7) {
    fortitudeLevel = 7;
    fortitudePoints = 8;
  } else if (level === 10) {
    fortitudeLevel = 10;
    fortitudePoints = 16;
  }
}

function FortitudeThreePerkLevels(level) {
  if (level === 0) {
    fortitudeLevel = 1;
    fortitudePoints = 0;
  } else if (level === 1) {
    fortitudeLevel = 1;
    fortitudePoints = 1;
  } else if (level === 4) {
    fortitudeLevel = 4;
    fortitudePoints = 3;
  } else if (level === 7) {
    fortitudeLevel = 7;
    fortitudePoints = 8;
  }
}

function FortitudeLivingOfTheLandPerkLevels(level) {
  if (level === 0) {
    fortitudeLevel = 1;
    fortitudePoints = 0;
  } else if (level === 1) {
    fortitudeLevel = 1;
    fortitudePoints = 1;
  } else if (level === 3) {
    fortitudeLevel = 3;
    fortitudePoints = 2;
  } else if (level === 5) {
    fortitudeLevel = 5;
    fortitudePoints = 4;
  }
}

function FortitudeLightningHandsPerkLevel(level) {
  if (level === 0) {
    fortitudeLevel = 1;
    fortitudePoints = 0;
  } else if (level === 4) {
    fortitudeLevel = 4;
    fortitudePoints = 3;
  } else if (level === 7) {
    fortitudeLevel = 7;
    fortitudePoints = 8;
  } else if (level === 10) {
    fortitudeLevel = 10;
    fortitudePoints = 16;
  }
}

function HighetsLivingOfTheLandLevelPerks() {
  if (arguments.length === 0) {
    return 0; // Inget värde att jämföra
  }
  var highestLevel = Math.max(...arguments);

  if (highestLevel === 3) {
    return 5;
  } else if (highestLevel === 2) {
    return 3;
  } else if (highestLevel === 1) {
    return 1;
  }
  return 0;
}

function HighetsLightningHandsLevelPerks() {
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

///////// Agility
let archeryLevel = 0;
let gunslingerLevel = 0;
let deepCutsLevel = 0;
let whirlwindLevel = 0;
let runAndGunLevel = 0;
let lightArmorLevel = 0;
let parkourLevel = 0;
let hiddenStrikeLevel = 0;
let fromTheShadowsLevel = 0;

function GetAgilityCell(skill, skillLevel) {
  SetAgilityPerkLevel(skill, skillLevel);
  ChangeAgilityLevel();
  UpdateUsedPoints();

  document.querySelectorAll(`#${skill}Table .select-level`).forEach((cell) => {
    cell.classList.remove("current-level");
  });

  const currentCell = document.querySelector(
    `#${skill}Table .select-level:nth-child(${skillLevel + 2})`
  );
  currentCell.classList.add("current-level");
}

function ChangeAgilityLevel() {
  let FiveLevelPerks = HighetsFiveLevelPerks(
    archeryLevel,
    gunslingerLevel,
    deepCutsLevel,
    hiddenStrikeLevel,
    fromTheShadowsLevel
  );

  let FourLevelPerks = HighetsFourLevelPerks(lightArmorLevel, parkourLevel);

  let ThreeLevelPerks = HighetsThreeLevelPerks(runAndGunLevel, whirlwindLevel);

  if (FiveLevelPerks > FourLevelPerks) {
    if (FiveLevelPerks > ThreeLevelPerks) {
      AgilityFivePerkLevels(FiveLevelPerks);
    } else {
      AgilityThreePerkLevels(ThreeLevelPerks);
    }
  } else {
    if (FourLevelPerks > ThreeLevelPerks) {
      AgilityFourPerkLevels(FourLevelPerks);
    } else {
      AgilityThreePerkLevels(ThreeLevelPerks);
    }
  }

  const selector = `#agilityTable .select-level:nth-child(${agilityLevel})`;
  const currentCell = document.querySelector(selector);

  if (currentCell) {
    document.querySelectorAll(`#agilityTable .select-level`).forEach((cell) => {
      if (cell !== currentCell) {
        cell.classList.remove("green-background");
      }
    });

    currentCell.classList.add("green-background");
  } else {
    console.log("Element not found!");
  }
}

function SetAgilityPerkLevel(skill, skillLevel) {
  if (skill === "archery") {
    archeryLevel = skillLevel;
  } else if (skill === "gunslinger") {
    gunslingerLevel = skillLevel;
  } else if (skill === "deepCuts") {
    deepCutsLevel = skillLevel;
  } else if (skill === "whirlwind") {
    whirlwindLevel = skillLevel;
  } else if (skill === "runAndGun") {
    runAndGunLevel = skillLevel;
  } else if (skill === "lightArmor") {
    lightArmorLevel = skillLevel;
  } else if (skill === "parkour") {
    parkourLevel = skillLevel;
  } else if (skill === "hiddenStrike") {
    hiddenStrikeLevel = skillLevel;
  } else if (skill === "fromTheShadows") {
    fromTheShadowsLevel = skillLevel;
  }
}

function AgilityFivePerkLevels(level) {
  if (level === 0) {
    agilityLevel = 1;
    agilityPoints = 0;
  } else if (level === 1) {
    agilityLevel = 1;
    agilityPoints = 1;
  } else if (level === 3) {
    agilityLevel = 3;
    agilityPoints = 2;
  } else if (level === 5) {
    agilityLevel = 5;
    agilityPoints = 4;
  } else if (level === 7) {
    agilityLevel = 7;
    agilityPoints = 8;
  } else if (level === 10) {
    agilityLevel = 10;
    agilityPoints = 16;
  }
}

function AgilityFourPerkLevels(level) {
  if (level === 0) {
    agilityLevel = 1;
    agilityPoints = 0;
  } else if (level === 1) {
    agilityLevel = 1;
    agilityPoints = 1;
  } else if (level === 4) {
    agilityLevel = 4;
    agilityPoints = 3;
  } else if (level === 6) {
    agilityLevel = 6;
    agilityPoints = 6;
  } else if (level === 8) {
    agilityLevel = 8;
    agilityPoints = 10;
  }
}

function AgilityThreePerkLevels(level) {
  if (level === 0) {
    agilityLevel = 1;
    agilityPoints = 0;
  } else if (level === 1) {
    agilityLevel = 1;
    agilityPoints = 1;
  } else if (level === 4) {
    agilityLevel = 4;
    agilityPoints = 3;
  } else if (level === 7) {
    agilityLevel = 7;
    agilityPoints = 8;
  }
}

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

///////// Common functions

function HighetsFiveLevelPerks() {
  if (arguments.length === 0) {
    return 0; // Inget värde att jämföra
  }
  var highestLevel = Math.max(...arguments);

  if (highestLevel === 5) {
    return 10;
  } else if (highestLevel === 4) {
    return 7;
  } else if (highestLevel === 3) {
    return 5;
  } else if (highestLevel === 2) {
    return 3;
  } else if (highestLevel === 1) {
    return 1;
  }
  return 0;
}

function HighetsFourLevelPerks() {
  if (arguments.length === 0) {
    return 0; // Inget värde att jämföra
  }
  var highestLevel = Math.max(...arguments);

  if (highestLevel === 4) {
    return 8;
  } else if (highestLevel === 3) {
    return 6;
  } else if (highestLevel === 2) {
    return 4;
  } else if (highestLevel === 1) {
    return 1;
  }
  return 0;
}

function HighetsThreeLevelPerks() {
  if (arguments.length === 0) {
    return 0; // Inget värde att jämföra
  }
  var highestLevel = Math.max(...arguments);

  if (highestLevel === 3) {
    return 7;
  } else if (highestLevel === 2) {
    return 4;
  } else if (highestLevel === 1) {
    return 1;
  }
  return 0;
}

function UpdateUsedPoints() {
  usedPoints =
    deadEyeLevel +
    demolitionsExpertLevel +
    spearMasterLevel +
    quickAndPerceptiveLevel +
    theInfiltratorLevel +
    animalTrackerLevel +
    thePenetratorLevel +
    luckyLooterLevel +
    treasureHunterLevel +
    salvageOperationsLevel +
    perceptionPoints +
    boomstickLevel +
    pummelPeteLevel +
    skullCrusherLevel +
    bigAndFastLevel +
    heavyArmorLevel +
    packMuleLevel +
    masterChefLevel +
    miner69erLevel +
    motherLodeLevel +
    strengthPoints +
    theBrawlerLevel +
    machineGunnerLevel +
    lightningHandsLevel +
    theHuntsmanLevel +
    wellInsulatedLevel +
    livingOffTheLandLevel +
    painToleranceLevel +
    healingFactorLevel +
    ironGutLevel +
    rule1CardioLevel +
    fortitudePoints +
    agilityPoints +
    intellectPoints;

  const usedPointsElement = document.getElementById("usedPoints");
  usedPointsElement.textContent = `Used point ${usedPoints} pt`;
}

function resetbtn() {
  GetPreceptionCell("deadEye", 0);
  GetPreceptionCell("demolitionsExpert", 0);
  GetPreceptionCell("spearMaster", 0);
  GetPreceptionCell("quickAndPerceptive", 0);
  GetPreceptionCell("infiltrator", 0);
  GetPreceptionCell("animalTracker", 0);
  GetPreceptionCell("penetrator", 0);
  GetPreceptionCell("luckyLooter", 0);
  GetPreceptionCell("treasureHunter", 0);
  GetPreceptionCell("salvageOperations", 0);

  GetStrengthCell("boomstick", 0);
  GetStrengthCell("pummelPete", 0);
  GetStrengthCell("skullCrusher", 0);
  GetStrengthCell("bigAndFast", 0);
  GetStrengthCell("heavyArmor", 0);
  GetStrengthCell("packMule", 0);
  GetStrengthCell("masterChef", 0);
  GetStrengthCell("miner69er", 0);
  GetStrengthCell("motherLode", 0);

  GetFortitudeCell("theBrawler", 0);
  GetFortitudeCell("machineGunner", 0);
  GetFortitudeCell("lightningHands", 0);
  GetFortitudeCell("theHuntsman", 0);
  GetFortitudeCell("wellInsulated", 0);
  GetFortitudeCell("livingOffTheLand", 0);
  GetFortitudeCell("painTolerance", 0);
  GetFortitudeCell("healingFactor", 0);
  GetFortitudeCell("ironGut", 0);
  GetFortitudeCell("rule1Cardio", 0);

  GetAgilityCell("archery", 0);
  GetAgilityCell("gunslinger", 0);
  GetAgilityCell("deepCuts", 0);
  GetAgilityCell("whirlwind", 0);
  GetAgilityCell("runAndGun", 0);
  GetAgilityCell("lightArmor", 0);
  GetAgilityCell("parkour", 0);
  GetAgilityCell("hiddenStrike", 0);
  GetAgilityCell("fromTheShadows", 0);

  GetIntellectCell("electrocutioner", 0);
  GetIntellectCell("roboticsInventor", 0);
  GetIntellectCell("calculatedAttack", 0);
  GetIntellectCell("betterBarter", 0);
  GetIntellectCell("theDaringAdventurer", 0);
  GetIntellectCell("charismaticNature", 0);
  GetIntellectCell("physician", 0);
  GetIntellectCell("advancedEngineering", 0);
  GetIntellectCell("greaseMonkey", 0);
  GetIntellectCell("lockPicking", 0);

  UpdateUsedPoints();
}
