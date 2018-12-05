import { connect } from "react-redux";
import Todos from "../components/Todos"

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);