import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect React and Redux


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key = {book.title} className = "list-group-item" >{book.title}</li>
            );
        });
    }


    render () {
        return (
            <ul className="List-group col-sm-4" >
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show
    //inside of BookList

    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList); // connect is used to make a component into a container

