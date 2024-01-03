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
