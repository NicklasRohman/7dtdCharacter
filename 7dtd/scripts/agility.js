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
