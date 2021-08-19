import * as axios from 'axios'
import { connect } from 'react-redux'
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from './../../Redux/users-reducer'
import React from 'react';
import Users from './Users';
import Preloader from './../Elements/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then( response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount (response.data.totalCount)
            }
        )
        
    }

    onPageChange = (number) => {
        this.props.setCurrentPage(number)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${number}`).then( response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            }
        )
    }
    
    render(){

        let unFollow = this.props.unFollow
        let follow = this.props.follow
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users 
            onPageChange= {this.onPageChange} unFollow= {unFollow} follow= {follow} users= {this.props.users} currentPage= {this.props.currentPage} pageSize= {this.props.pageSize} totalUsersCount= {this.props.totalUsersCount}
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching

}) (UsersContainer)