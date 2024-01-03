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
