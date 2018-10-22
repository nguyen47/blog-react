import React, { Component } from 'react';
import { getBlogs } from '../services/fakeBlogService';
import Like from '../commons/like';

class Blogs extends Component {
  state = {
    blogs: getBlogs()
  };

  render() {
    const { length } = this.state.blogs;

    if (length === 0) {
      return <p>No blog in database !</p>;
    }
    return (
      <React.Fragment>
        <p>There are {length} blog in database</p>
        <table className="table .table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Date Publish</th>
              <th scope="col">Action</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.blogs.map((blog) => (
              <tr key={blog._id}>
                <th scope="row">{blog._id}</th>
                <td>{blog.title}</td>
                <td>{blog.genre.name}</td>
                <td>{blog.publishDate}</td>
                <td align="center">
                  <Like
                    liked={blog.like}
                    onLike={() => this.handleLike(blog)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(blog)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  handleDelete = (blog) => {
    const blogs = this.state.blogs.filter((b) => b._id !== blog._id);
    this.setState({ blogs });
  };

  handleLike = (blog) => {
    const blogs = [...this.state.blogs];
    const index = blogs.indexOf(blog);
    blogs[index] = { ...blogs[index] };
    blogs[index].like = !blogs[index].like;
    this.setState({ blogs });
  };
}

export default Blogs;
