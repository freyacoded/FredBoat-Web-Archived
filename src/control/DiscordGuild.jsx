class DiscordGuild {

    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.icon = "https://cdn.discordapp.com/icons/" + obj.id + "/" + obj.icon + ".jpg";
    }

}


//DiscordGuild.placeholder = new DiscordGuild({id: "132490115137142784", name: "This is an example server", icon: "e6ffda3e8ae9353e754dcd514e685e9e"});
DiscordGuild.placeholder = new DiscordGuild({id: "125227483518861312", name: "This is an example server", icon: "c9ea3e5510039dd487171c300a363813"});

export default DiscordGuild;