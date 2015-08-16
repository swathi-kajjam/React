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


var Main = React.createClass({
    render: function(){
        return(
            <div>
            <Card login="peterHunt"/>
        <Card login="skajjam"/>
        </div>
        )
    }
});


React.render(<Main/>, document.getElementById("root"))