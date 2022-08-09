const quotes = ["What is better? To be born good or to overcome your evil nature through great effort? Paarthurnax, The Elder Scrolls 5: Skyrim",
"The right man in the wrong place can make all the difference in the world. G-Man, Half-Life 2", "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer. Javik, Mass Effect 3",
"The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take...inventory. Captain Price, Call of Duty: Modern Warfare 2",
"It's a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same. Emily Kaldwin, Dishonored",  "A hero need not speak. When he is gone, the world will speak for him. Halo",
"No gods or kings. Only man. Andrew Ryan, BioShock", "You can't break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands. The Jackal, Far Cry 2", 
"It's easy to forget what a sin is in the middle of a battlefield. Solid Snake, Metal Gear Solid", "War. War never changes. Narrator, Fallout 3", "What is a man? A miserable little pile of secrets. Dracula, Castlevania: Symphony of the Night", "A man chooses; a slave obeys. Andrew Ryan, BioShock", 
"Wake me when you need me. John-117, Halo 3", "War. War never changes. But men do, through the roads they walk. The narrator, Fallout: New Vegas", "Hard to see big picture behind pile of corpses. Mordin Solus, Mass Effect 3", "What is a man but the sum of his memories? We are the stories we live! The tales we tell ourselves! Clay Kaczmarek, Assassin's Creed Brotherhood",
"When life gives you lemons, don't make lemonade. Make life take the lemons back! Get mad! I don't want your damn lemons! What am I supposed to do with these?! Demand to see life's manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am?! I'm the man who's gonna burn your house down! With the lemons! I'm gonna get my engineers to invent a combustible lemon that burns your house down! Cave Johnson, Portal 2",
"Send me out...with a bang. Sgt. Avery Johnson, Halo 3", "Dear Humanity… We regret being alien bastards. We regret coming to Earth. And we most definitely regret that the Corps just blew up our raggedy-*** fleet! Avery Johnson", "The secret of getting ahead is getting started. —Mark Twain", "Don't downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.", "Work while they sleep. Learn while they party. Save while they spend. Live like they dream.",
"Most people want to avoid pain, and discipline is usually painful."];

function getQuote() {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerHTML = quote;
}
document.getElementById('quote-btn').addEventListener('click', ()=>{
    getQuote();
})