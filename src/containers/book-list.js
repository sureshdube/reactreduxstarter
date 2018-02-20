import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';
class BookList extends Component{

    renderList() {
        return (
            this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">{
                    book.title
                }
                </li>
            )
        })
    )
    }

    render(){
        return(
            <ul className = "list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}

// Anything returned by this function is end up as props for this BookList container.
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, result should be passed to all reducers.
    return bindActionCreators({selectBook:selectBook},dispatch);
}
// Promote book list from
export default connect(mapStateToProps,mapDispatchToProps)(BookList)