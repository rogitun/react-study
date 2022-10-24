

const Header = (props) => {

    return (
        <div>
        <header>
          <h1><a href="/" onClick={(e)=>{
            e.preventDefault();
            props.onChangeMode();
            }}> {props.title}</a></h1>
        </header>
        </div>
    )
}

export default Header