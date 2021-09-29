import { connect } from 'react-redux'
import {setCurrentPage, toggleIsFollowing } from './../../Redux/users-reducer'
import React from 'react';
import Users from './Users';
import Preloader from './../Elements/Preloader';
import { getUsers, follow, unFollow } from './../../Redux/users-reducer';
import { compose } from 'redux';
import { AuthRedirect } from './../../HOC/AuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        
    }

    onPageChange = (number) => {
        this.props.setCurrentPage(number)
        this.props.getUsers(number, this.props.pageSize)
    }
    
    render(){

        return <>
            {this.props.isFetching && <Preloader/>}
            <Users 
            onPageChange= {this.onPageChange} users= {this.props.users} currentPage= {this.props.currentPage} pageSize= {this.props.pageSize} totalUsersCount= {this.props.totalUsersCount}  followingProgress= {this.props.followingProgress} follow= {this.props.follow} unFollow= {this.props.unFollow}
            />
        </>
    
    }
        
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default compose(
    AuthRedirect,
    connect(mapStateToProps, {setCurrentPage, toggleIsFollowing, getUsers, follow, unFollow})

)(UsersContainer)

