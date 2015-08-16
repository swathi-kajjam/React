var Card= React.createClass({
    getInitialState: function(){
    return {}
},
componentDidMount: function(){
    var component = this
    $.get("https://api.github.com/users/" + this.props.login, function(data){
        component.setState(data);
    })
},
render: function(){
    return(
        <div>
        <img src={this.state.avatar_url} width="80"/>
<h2>{this.state.login}</h2>
</div>
)
}
});

var UserForm = React.createClass({
    getInitialState: function(){

    },
    render: function(){
        return (
            <div>
            <input type="text" name="txtUser"/>
        <button>Add</button>
        </div>
        )
    }
})


var Main = React.createClass({
    getInitialState: function(){
        return { logins: ["peterHunt", "skajjam"] }
    },
    render: function(){
        var cards = this.state.logins.map(function(login){
            return (<Card login={login}/>)
        });
        return(
            <div>
            {cards}
            </div>
        )
    }
});


React.render(<Main/>, document.getElementById("root"))