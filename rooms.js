

class Room{
    constructor(){
        this.players = [];
        this.totalPlayers = 0;
    }
    addPlayer(roomId, playerName){
        const player = {
            id: this.totalPlayers,
            playerName: playerName
        }
        this.players.push(player);
        this.totalPlayers++;
    }
    removePlayer(roomId, playerId){
        this.players.filter((player) => {
            return (player.id != playerId);
        })
    }

}