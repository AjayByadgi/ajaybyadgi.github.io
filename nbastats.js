const apiKey = '8bf75d20b94e433bba6ebeb7159133b1';
const apiUrl = 'https://api.sportsdata.io/v3/nba/scores/json';

const apiUrlBox = 'https://api.sportsdata.io/v3/nba/stats/json' ;


const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`; 


let date = '2022-01-12';
const gameid = '14620'; 

const linkformat = 'https://www.thestreameast.to/nba/';

/*

fetch(`${apiUrlBox}/BoxScore/${gameid}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const homestats = data.HomeTeam;
    console.log(homestats);

    console.log("hello world");

    const homeTeam = data.TeamGames.find((team) => team.HomeOrAway === "HOME");
const awayTeam = data.TeamGames.find((team) => team.HomeOrAway === "AWAY");

const homePlayers = data.PlayerGames.filter((player) => player.TeamID === homeTeam.TeamID);
const awayPlayers = data.PlayerGames.filter((player) => player.TeamID === awayTeam.TeamID);

// Print home team players' statistics
console.log("Home Team Players:");
homePlayers.forEach((player) => {
  console.log(`Player: ${player.Name}`);
  console.log(`Minutes: ${player.Minutes}`); 

  console.log(`Points: ${player.Points}`);
  console.log(`Assists: ${player.Assists}`);
  console.log(`Rebounds: ${player.Rebounds}`);
  console.log(`Field Goal %: ${player.FieldGoalsPercentage}`);
  console.log(`3pt %: ${player.ThreePointersPercentage}`);
  console.log(`Fouls: ${player.PersonalFouls}`);
  console.log(`Turnovers: ${player.Turnovers}`);



  // Add more statistics as needed
  console.log("------------------------");

  

  
});

// Print away team players' statistics
console.log("Away Team Players:");
awayPlayers.forEach((player) => {
  console.log(`Player: ${player.Name}`);
  console.log(`Points: ${player.Points}`);
  console.log(`Assists: ${player.Assists}`);
  // Add more statistics as needed
  console.log("------------------------");
});

    



  })
  .catch(error => {
    console.log('Error:', error);
});
*/

/* go back to live and starting at live works. just needs to change the date to the current date. */
let counter = 0;
fetch(`${apiUrl}/GamesByDate/${date}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Iterate through the data array and update HTML elements
    data.forEach((game, index) => {
      const team1name = game.HomeTeam;
      const team2name = game.AwayTeam;
      const team1score = game.HomeTeamScore;
      const team2score = game.AwayTeamScore;

      const team1nameElement = document.getElementById(`${index}team1name`);
      const team2nameElement = document.getElementById(`${index}team2name`);
      const team1scoreElement = document.getElementById(`${index}score1`);
      const team2scoreElement = document.getElementById(`${index}score2`);

      team1nameElement.innerText = team1name;
      team2nameElement.innerText = team2name;
      team1scoreElement.innerText = team1score;
      team2scoreElement.innerText = team2score;
      const yuh = game.GameID;
      
      //fetch(`${apiUrlBox}/BoxScore/${GameID}?key=${apiKey}`)


      
fetch(`${apiUrlBox}/BoxScore/${yuh}?key=${apiKey}`)
.then(response => response.json())
.then(data => {
  const homestats = data.HomeTeam;

  console.log("hello world");

  const homeTeam = data.TeamGames.find((team) => team.HomeOrAway === "HOME");
const awayTeam = data.TeamGames.find((team) => team.HomeOrAway === "AWAY");

const homePlayers = data.PlayerGames.filter((player) => player.TeamID === homeTeam.TeamID);
const awayPlayers = data.PlayerGames.filter((player) => player.TeamID === awayTeam.TeamID);

//const awayTeamFullName = teamGames.find((team) => team.Team === gameData.Game.AwayTeam).Name;
//const homeTeamFullName = teamGames.find((team) => team.Team === gameData.Game.HomeTeam).Name;
//console.log("full name" + awayTeamFullName);

// Print home team players' statistics

const homeTeamFullName = data.TeamGames.find(team => team.Team === game.HomeTeam).Name;
          const awayTeamFullName = data.TeamGames.find(team => team.Team === game.AwayTeam).Name;

          console.log("Home Team Full Name:", homeTeamFullName);
          console.log("Away Team Full Name:", awayTeamFullName);

          const formathome = homeTeamFullName.replace(/\s+/g, '-');
          const formataway = awayTeamFullName.replace(/\s+/g, '-');
          const final = formathome+'-'+formataway;
          const link = document.getElementById(`${index}L`);
          const putin = `${linkformat}${final}-2/`;

          console.log(`${linkformat}${final}-2/`);
          link.href = (`${linkformat}${final}-2/`);
          link.style.display = "block";
          link.textContent = `${homeTeamFullName} @ ${awayTeamFullName}`;





console.log("Home Team Players:");
let buttonIndex = 0; 
homePlayers.forEach((player) => {
console.log(`Player: ${player.Name}`);
console.log(`Minutes: ${player.Minutes}`); 

console.log(`Points: ${player.Points}`);
console.log(`Assists: ${player.Assists}`);
console.log(`Rebounds: ${player.Rebounds}`);
console.log(`Field Goal %: ${player.FieldGoalsPercentage}`);
console.log(`3pt %: ${player.ThreePointersPercentage}`);
console.log(`Fouls: ${player.PersonalFouls}`);
console.log(`Turnovers: ${player.Turnovers}`);



const row = document.createElement('tr');

const tableBody = document.getElementById(`${index}box-score-body-home`);
$(`${index}box-score-body-home tbody`).empty();
  
  const playerCell = document.createElement('td');
  playerCell.textContent = player.Name;
  row.appendChild(playerCell);
  

  const minutesCell = document.createElement('td');
  minutesCell.textContent = player.Minutes;
  row.appendChild(minutesCell); 

  const pointsCell = document.createElement('td');
  pointsCell.textContent = player.Points;
  row.appendChild(pointsCell);
  
  const reboundsCell = document.createElement('td');
  reboundsCell.textContent = player.Rebounds;
  row.appendChild(reboundsCell);
  


  const assistsCell = document.createElement('td');
  assistsCell.textContent = player.Assists;
  row.appendChild(assistsCell);


  const blocksCell = document.createElement('td');
  blocksCell.textContent = player.BlockedShots;
  row.appendChild(blocksCell);


  const stealsCell = document.createElement('td');
  stealsCell.textContent = player.Steals;
  row.appendChild(stealsCell);


  const fgperCell = document.createElement('td');
  fgperCell.textContent = player.FieldGoalsPercentage;
  row.appendChild(fgperCell);


  const tpperCell = document.createElement('td');
  tpperCell.textContent = player.ThreePointersPercentage;
  row.appendChild(tpperCell);

  const foulsCell = document.createElement('td');
  foulsCell.textContent = player.PersonalFouls;
  row.appendChild(foulsCell);

  const TurnoversCell = document.createElement('td');
  TurnoversCell.textContent = player.Turnovers;
  row.appendChild(TurnoversCell);


  const pmsCell = document.createElement('td');
  pmsCell.textContent = player.PlusMinus;
  row.appendChild(pmsCell);



  
  // Append the row to the table body
  tableBody.appendChild(row);




// Add more statistics as needed
console.log("------------------------");

const homebut = document.getElementById(`${index}homebut`);
homebut.style.display = "block";
var team1 = homeTeam.Name;
console.log(team1);

});

// Print away team players' statistics
console.log("Away Team Players:");
awayPlayers.forEach((player) => {

console.log(`Player: ${player.Name}`);
console.log(`Points: ${player.Points}`);
console.log(`Assists: ${player.Assists}`);
// Add more statistics as needed
console.log("------------------------");


const row = document.createElement('tr');

const tableBody = document.getElementById(`${index}box-score-body-away`);
$(`${index}box-score-body-away tbody`).empty();

  
  const playerCell = document.createElement('td');
  playerCell.textContent = player.Name;
  row.appendChild(playerCell);
  

  const minutesCell = document.createElement('td');
  minutesCell.textContent = player.Minutes;
  row.appendChild(minutesCell); 

  const pointsCell = document.createElement('td');
  pointsCell.textContent = player.Points;
  row.appendChild(pointsCell);
  
  const reboundsCell = document.createElement('td');
  reboundsCell.textContent = player.Rebounds;
  row.appendChild(reboundsCell);
  


  const assistsCell = document.createElement('td');
  assistsCell.textContent = player.Assists;
  row.appendChild(assistsCell);


  const blocksCell = document.createElement('td');
  blocksCell.textContent = player.BlockedShots;
  row.appendChild(blocksCell);


  const stealsCell = document.createElement('td');
  stealsCell.textContent = player.Steals;
  row.appendChild(stealsCell);


  const fgperCell = document.createElement('td');
  fgperCell.textContent = player.FieldGoalsPercentage;
  row.appendChild(fgperCell);


  const tpperCell = document.createElement('td');
  tpperCell.textContent = player.ThreePointersPercentage;
  row.appendChild(tpperCell);

  const foulsCell = document.createElement('td');
  foulsCell.textContent = player.PersonalFouls;
  row.appendChild(foulsCell);

  const TurnoversCell = document.createElement('td');
  TurnoversCell.textContent = player.Turnovers;
  row.appendChild(TurnoversCell);



  const pmsCell = document.createElement('td');
  pmsCell.textContent = player.PlusMinus;
  row.appendChild(pmsCell);

  
  // Append the row to the table body
  tableBody.appendChild(row);


  const awaybut = document.getElementById(`${index}awaybut`);
  awaybut.style.display = "block";

  //counter = counter + 1; 
});

  



})
.catch(error => {
  console.log('Error:', error);
});




    
      
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });




const submitButton = document.getElementById('SubmitButton');
const form = document.getElementById('form1');
  
submitButton.addEventListener('click', (event) => {

     
    event.preventDefault();
    let date = document.getElementById('gamedate').value;
  
    var titleText = document.getElementById('title-text');
    titleText.innerText = date + " STATS"; 
    let counter = 0;




fetch(`${apiUrl}/GamesByDate/${date}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Iterate through the data array and update HTML elements
    data.forEach((game, index) => {
      const team1name = game.HomeTeam;
      const team2name = game.AwayTeam;
      const team1score = game.HomeTeamScore;
      const team2score = game.AwayTeamScore;

      const team1nameElement = document.getElementById(`${index}team1name`);
      const team2nameElement = document.getElementById(`${index}team2name`);
      const team1scoreElement = document.getElementById(`${index}score1`);
      const team2scoreElement = document.getElementById(`${index}score2`);

      team1nameElement.innerText = team1name;
      team2nameElement.innerText = team2name;
      team1scoreElement.innerText = team1score;
      team2scoreElement.innerText = team2score;
      const yuh = game.GameID;
      console.log("here: " + yuh);
      //fetch(`${apiUrlBox}/BoxScore/${GameID}?key=${apiKey}`)

      const tableBody = document.getElementById(`${index}box-score-body-home`);
    //$(`#${index}box-score-body-home`).empty();
    tableBody.innerHTML = '';
    const tableBody1 = document.getElementById(`${index}box-score-body-away`);
    //$(`#${index}box-score-body-home`).empty();


    tableBody1.innerHTML = '';
    
    const link = document.getElementById(`${index}L`);
    link.href = ""; // Clear the href attribute
    link.textContent = ""; // Clear the link's content

    






      
fetch(`${apiUrlBox}/BoxScore/${yuh}?key=${apiKey}`)
.then(response => response.json())
.then(data => {
  const homestats = data.HomeTeam;

  console.log("hello world");

  const homeTeam = data.TeamGames.find((team) => team.HomeOrAway === "HOME");
const awayTeam = data.TeamGames.find((team) => team.HomeOrAway === "AWAY");

const homePlayers = data.PlayerGames.filter((player) => player.TeamID === homeTeam.TeamID);
const awayPlayers = data.PlayerGames.filter((player) => player.TeamID === awayTeam.TeamID);

// Print home team players' statistics
console.log("Home Team Players:");
let buttonIndex = 0; 
homePlayers.forEach((player) => {
console.log(`Player: ${player.Name}`);
console.log(`Minutes: ${player.Minutes}`); 

console.log(`Points: ${player.Points}`);
console.log(`Assists: ${player.Assists}`);
console.log(`Rebounds: ${player.Rebounds}`);
console.log(`Field Goal %: ${player.FieldGoalsPercentage}`);
console.log(`3pt %: ${player.ThreePointersPercentage}`);
console.log(`Fouls: ${player.PersonalFouls}`);
console.log(`Turnovers: ${player.Turnovers}`);






const row = document.createElement('tr');

const tableBody = document.getElementById(`${index}box-score-body-home`);

const playerCell = document.createElement('td');
playerCell.textContent = player.Name;
row.appendChild(playerCell);


const minutesCell = document.createElement('td');
minutesCell.textContent = player.Minutes;
row.appendChild(minutesCell); 

const pointsCell = document.createElement('td');
pointsCell.textContent = player.Points;
row.appendChild(pointsCell);

const reboundsCell = document.createElement('td');
reboundsCell.textContent = player.Rebounds;
row.appendChild(reboundsCell);



const assistsCell = document.createElement('td');
assistsCell.textContent = player.Assists;
row.appendChild(assistsCell);


const blocksCell = document.createElement('td');
blocksCell.textContent = player.BlockedShots;
row.appendChild(blocksCell);


const stealsCell = document.createElement('td');
stealsCell.textContent = player.Steals;
row.appendChild(stealsCell);


const fgperCell = document.createElement('td');
fgperCell.textContent = player.FieldGoalsPercentage;
row.appendChild(fgperCell);


const tpperCell = document.createElement('td');
tpperCell.textContent = player.ThreePointersPercentage;
row.appendChild(tpperCell);

const foulsCell = document.createElement('td');
foulsCell.textContent = player.PersonalFouls;
row.appendChild(foulsCell);

const TurnoversCell = document.createElement('td');
TurnoversCell.textContent = player.Turnovers;
row.appendChild(TurnoversCell);



const pmsCell = document.createElement('td');
pmsCell.textContent = player.PlusMinus;
row.appendChild(pmsCell);





  
  // Append the row to the table body
  tableBody.appendChild(row);




// Add more statistics as needed
console.log("------------------------");

const homebut = document.getElementById(`${index}homebut`);
homebut.style.display = "block";

});

// Print away team players' statistics
console.log("Away Team Players:");
awayPlayers.forEach((player) => {

console.log(`Player: ${player.Name}`);
console.log(`Points: ${player.Points}`);
console.log(`Assists: ${player.Assists}`);
// Add more statistics as needed
console.log("------------------------");


const row = document.createElement('tr');

const tableBody = document.getElementById(`${index}box-score-body-away`);

const playerCell = document.createElement('td');
playerCell.textContent = player.Name;
row.appendChild(playerCell);


const minutesCell = document.createElement('td');
minutesCell.textContent = player.Minutes;
row.appendChild(minutesCell); 

const pointsCell = document.createElement('td');
pointsCell.textContent = player.Points;
row.appendChild(pointsCell);

const reboundsCell = document.createElement('td');
reboundsCell.textContent = player.Rebounds;
row.appendChild(reboundsCell);



const assistsCell = document.createElement('td');
assistsCell.textContent = player.Assists;
row.appendChild(assistsCell);


const blocksCell = document.createElement('td');
blocksCell.textContent = player.BlockedShots;
row.appendChild(blocksCell);


const stealsCell = document.createElement('td');
stealsCell.textContent = player.Steals;
row.appendChild(stealsCell);


const fgperCell = document.createElement('td');
fgperCell.textContent = player.FieldGoalsPercentage;
row.appendChild(fgperCell);


const tpperCell = document.createElement('td');
tpperCell.textContent = player.ThreePointersPercentage;
row.appendChild(tpperCell);

const foulsCell = document.createElement('td');
foulsCell.textContent = player.PersonalFouls;
row.appendChild(foulsCell);

const TurnoversCell = document.createElement('td');
TurnoversCell.textContent = player.Turnovers;
row.appendChild(TurnoversCell);



const pmsCell = document.createElement('td');
pmsCell.textContent = player.PlusMinus;
row.appendChild(pmsCell);





  
  // Append the row to the table body
  tableBody.appendChild(row);


  const awaybut = document.getElementById(`${index}awaybut`);
  awaybut.style.display = "block";

  //counter = counter + 1; 
});

  



})
.catch(error => {
  console.log('Error:', error);
});




    
      
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });


});

const homebut = document.getElementById('homebutton');

homebut.addEventListener('click', (event) => {
    const textitle = document.getElementById('title-text');
    textitle.innerText = "NBA LIVE STATS";


    const date1 = '2022-01-12';
    let counter = 0;
fetch(`${apiUrl}/GamesByDate/${date1}?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Iterate through the data array and update HTML elements
    data.forEach((game, index) => {
      const team1name = game.HomeTeam;
      const team2name = game.AwayTeam;
      const team1score = game.HomeTeamScore;
      const team2score = game.AwayTeamScore;

      const team1nameElement = document.getElementById(`${index}team1name`);
      const team2nameElement = document.getElementById(`${index}team2name`);
      const team1scoreElement = document.getElementById(`${index}score1`);
      const team2scoreElement = document.getElementById(`${index}score2`);

      team1nameElement.innerText = team1name;
      team2nameElement.innerText = team2name;
      team1scoreElement.innerText = team1score;
      team2scoreElement.innerText = team2score;
      const yuh = game.GameID;
      console.log("here: " + yuh);
      //fetch(`${apiUrlBox}/BoxScore/${GameID}?key=${apiKey}`)

      const tableBody = document.getElementById(`${index}box-score-body-home`);
    //$(`#${index}box-score-body-home`).empty();
    tableBody.innerHTML = '';
    const tableBody1 = document.getElementById(`${index}box-score-body-away`);
    //$(`#${index}box-score-body-home`).empty();
    tableBody1.innerHTML = '';

    const link = document.getElementById(`${index}L`);
link.href = ""; // Clear the href attribute
link.textContent = ""; // Clear the link's content


   


   

      
fetch(`${apiUrlBox}/BoxScore/${yuh}?key=${apiKey}`)
.then(response => response.json())
.then(data => {
  const homestats = data.HomeTeam;

  console.log("hello world");

  const homeTeam = data.TeamGames.find((team) => team.HomeOrAway === "HOME");
const awayTeam = data.TeamGames.find((team) => team.HomeOrAway === "AWAY");

const homePlayers = data.PlayerGames.filter((player) => player.TeamID === homeTeam.TeamID);
const awayPlayers = data.PlayerGames.filter((player) => player.TeamID === awayTeam.TeamID);

// Print home team players' statistics
console.log("Home Team Players:");
let buttonIndex = 0; 
homePlayers.forEach((player) => {
console.log(`Player: ${player.Name}`);
console.log(`Minutes: ${player.Minutes}`); 

console.log(`Points: ${player.Points}`);
console.log(`Assists: ${player.Assists}`);
console.log(`Rebounds: ${player.Rebounds}`);
console.log(`Field Goal %: ${player.FieldGoalsPercentage}`);
console.log(`3pt %: ${player.ThreePointersPercentage}`);
console.log(`Fouls: ${player.PersonalFouls}`);
console.log(`Turnovers: ${player.Turnovers}`);


const homeTeamFullName = data.TeamGames.find(team => team.Team === game.HomeTeam).Name;
const awayTeamFullName = data.TeamGames.find(team => team.Team === game.AwayTeam).Name;

console.log("Home Team Full Name:", homeTeamFullName);
console.log("Away Team Full Name:", awayTeamFullName);

const formathome = homeTeamFullName.replace(/\s+/g, '-');
const formataway = awayTeamFullName.replace(/\s+/g, '-');
const final = formathome+'-'+formataway;
const link = document.getElementById(`${index}L`);
const putin = `${linkformat}${final}-2/`;

console.log(`${linkformat}${final}-2/`);
link.href = (`${linkformat}${final}-2/`);
link.style.display = "block";
link.textContent = `${homeTeamFullName} @ ${awayTeamFullName}`;



const tableBody = document.getElementById(`${index}box-score-body-home`);
  //$(`#${index}box-score-body-home`).empty();
  //tableBody.innerHTML = '';
  
  const row = document.createElement('tr');

  const playerCell = document.createElement('td');
  playerCell.textContent = player.Name;
  row.appendChild(playerCell);
  

  const minutesCell = document.createElement('td');
  minutesCell.textContent = player.Minutes;
  row.appendChild(minutesCell); 

  const pointsCell = document.createElement('td');
  pointsCell.textContent = player.Points;
  row.appendChild(pointsCell);
  
  const reboundsCell = document.createElement('td');
  reboundsCell.textContent = player.Rebounds;
  row.appendChild(reboundsCell);
  


  const assistsCell = document.createElement('td');
  assistsCell.textContent = player.Assists;
  row.appendChild(assistsCell);


  const blocksCell = document.createElement('td');
  blocksCell.textContent = player.BlockedShots;
  row.appendChild(blocksCell);


  const stealsCell = document.createElement('td');
  stealsCell.textContent = player.Steals;
  row.appendChild(stealsCell);


  const fgperCell = document.createElement('td');
  fgperCell.textContent = player.FieldGoalsPercentage;
  row.appendChild(fgperCell);


  const tpperCell = document.createElement('td');
  tpperCell.textContent = player.ThreePointersPercentage;
  row.appendChild(tpperCell);

  const foulsCell = document.createElement('td');
  foulsCell.textContent = player.PersonalFouls;
  row.appendChild(foulsCell);

  const TurnoversCell = document.createElement('td');
  TurnoversCell.textContent = player.Turnovers;
  row.appendChild(TurnoversCell);



  const pmsCell = document.createElement('td');
  pmsCell.textContent = player.PlusMinus;
  row.appendChild(pmsCell);





  
  // Append the row to the table body
  tableBody.appendChild(row);




// Add more statistics as needed
console.log("------------------------");

const homebut = document.getElementById(`${index}homebut`);
homebut.style.display = "block";

});

// Print away team players' statistics
console.log("Away Team Players:");
awayPlayers.forEach((player) => {

console.log(`Player: ${player.Name}`);
console.log(`Points: ${player.Points}`);
console.log(`Assists: ${player.Assists}`);
// Add more statistics as needed
console.log("------------------------");


const row = document.createElement('tr');

const tableBody = document.getElementById(`${index}box-score-body-away`);

const playerCell = document.createElement('td');
playerCell.textContent = player.Name;
row.appendChild(playerCell);


const minutesCell = document.createElement('td');
minutesCell.textContent = player.Minutes;
row.appendChild(minutesCell); 

const pointsCell = document.createElement('td');
pointsCell.textContent = player.Points;
row.appendChild(pointsCell);

const reboundsCell = document.createElement('td');
reboundsCell.textContent = player.Rebounds;
row.appendChild(reboundsCell);



const assistsCell = document.createElement('td');
assistsCell.textContent = player.Assists;
row.appendChild(assistsCell);


const blocksCell = document.createElement('td');
blocksCell.textContent = player.BlockedShots;
row.appendChild(blocksCell);


const stealsCell = document.createElement('td');
stealsCell.textContent = player.Steals;
row.appendChild(stealsCell);


const fgperCell = document.createElement('td');
fgperCell.textContent = player.FieldGoalsPercentage;
row.appendChild(fgperCell);


const tpperCell = document.createElement('td');
tpperCell.textContent = player.ThreePointersPercentage;
row.appendChild(tpperCell);

const foulsCell = document.createElement('td');
foulsCell.textContent = player.PersonalFouls;
row.appendChild(foulsCell);

const TurnoversCell = document.createElement('td');
TurnoversCell.textContent = player.Turnovers;
row.appendChild(TurnoversCell);



const pmsCell = document.createElement('td');
pmsCell.textContent = player.PlusMinus;
row.appendChild(pmsCell);





  
  // Append the row to the table body
  tableBody.appendChild(row);


  const awaybut = document.getElementById(`${index}awaybut`);
  awaybut.style.display = "block";

  //counter = counter + 1; 
});

  



})
.catch(error => {
  console.log('Error:', error);
});




    
      
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });


});

/* 
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

const Homebutton = document.getElementById('homebutton');
*/


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')

}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
} 




