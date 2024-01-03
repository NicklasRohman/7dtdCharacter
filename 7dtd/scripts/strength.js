///////// Strength functions
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
