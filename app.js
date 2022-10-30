
const response = await fetch("/PRAGMATICPLAY-gamelist.json");
const data = await response.json();

const gameContainer = document.getElementById('game-container');

const createGameCard = (index, gameData) => {
  let name = gameData["game_name_en"]
  let isNew = gameData["is_new"] == "Y"
  let provider = gameData["game_provider"]
  let gameImage = './game-images/game-image' + (parseInt(index)+1) + '.jpg';

  let gameCard = document.createElement("div");
  gameCard.classList.add("game-card")

  let gameBox = document.createElement("div")
  gameBox.classList.add("game-box")
  gameBox.style.backgroundImage = "url(" + gameImage + ")";

  gameBox.appendChild(createHover(provider))

  if(isNew){
    gameBox.appendChild(createNewTag())
  }

  let gameName = document.createElement("p")
  gameName.classList.add("game-name")
  gameName.innerHTML = name

  gameCard.appendChild(gameBox)
  gameCard.appendChild(gameName);

  return gameCard
}

const createNewTag = () => {
  let newTagContainer = document.createElement("div")
  newTagContainer.classList.add("new-container")

  let newTagBg = document.createElement("div")
  newTagBg.classList.add("new-bg")

  let newTagText = document.createElement("p")
  newTagText.innerHTML = "NEW"
  newTagText.classList.add("new-text")


  newTagContainer.appendChild(newTagBg)
  newTagContainer.appendChild(newTagText)

  return newTagContainer
}

const createHover = (provider) => {
  let gameHover = document.createElement("div")
  gameHover.classList.add("game-hover")

  let playButton = document.createElement("button")
  playButton.classList.add("gold-btn")
  playButton.innerHTML = "Play Now"

  let demoButton = document.createElement("button")
  demoButton.classList.add("red-btn")
  demoButton.innerHTML = "Demo"

  let gameProvider = document.createElement("p")
  gameProvider.innerHTML = provider

  gameHover.appendChild(playButton)
  gameHover.appendChild(demoButton)
  gameHover.appendChild(gameProvider)

  return gameHover
}

Object.entries(data["PRAGMATIC PLAY"]).forEach(([key, gameData]) => {
  gameContainer.appendChild(createGameCard(key, gameData))
});

