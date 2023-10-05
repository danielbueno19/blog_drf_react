import FullWhithLayout from "hocs/layouts/FullWhithLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog"

function Blog({
    get_blog_list,
    get_blog_list_page,
    blog_list
}){

    useEffect(()=>{
        get_blog_list()
    },[])

    return(
        <FullWhithLayout>
            Blog
        </FullWhithLayout>
    )
}

const mapStateToPropos = state =>({
    blog_list: state.blog.blog_list
})

export default connect(mapStateToPropos,{
    get_blog_list,
    get_blog_list_page
})(Blog)