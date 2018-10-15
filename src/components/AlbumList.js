import React, { Component } from "react";
import renderHTML from "react-render-html";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

class AlbumList extends Component {
    renderAlbumList = () => {
        if (this.props.albums) {
            return this.props.albums.map(el => {
                return (
                    <li key={el.id}>
                        <div className="title">{el.title}</div>

                        <div
                            className="remove"
                            onClick={() => this.removeAlbums(el.id)}
                        >
                            X
                        </div>
                    </li>
                );
            });
        } else {
            return;
        }
    };

    removeAlbums(id) {
        this.props.removeAlbums(id);
    }

    renderTodosList() {
        let content = "";
        for (let i in this.props.todos) {
            content += `<li>
            <div class="title">
            ${this.props.todos[i].title}
            </div>
            
            </li>`;
        }

        return content;
    }

    loadAlbums = () => {
        this.props.loadAlbums();
    };

    loadToDos = () => {
        this.props.loadTodos();
    };

    render() {
        return (
            <div>
                <h1>Albums</h1>
                <ul className="albums">{this.renderAlbumList()}</ul>
                <h1>Todos</h1>
                <ul className="todo">{renderHTML(this.renderTodosList())}</ul>
                <button onClick={this.loadAlbums}>Load Albums</button>
                <button onClick={this.loadToDos}>Load Todos</button>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         { loadAlbums, loadTodos, removeAlbums },
//         dispatch
//     );
// }

function mapStateToProps(state) {
    return {
        albums: state.simpleReducer.result,
        todos: state.todoReducer.result_to
    };
}

export default connect(
    mapStateToProps,
    actions
)(AlbumList);
