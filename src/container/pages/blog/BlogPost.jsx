import FullWhithLayout from "hocs/layouts/FullWhithLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_blog } from "redux/actions/blog"

function BlogPost({
    get_blog,
    post
}){
    'el slug viene de la url'
    const params = useParams()
    const slug = params.slug

    useEffect(()=>{        
        get_blog(slug)
    },[])

    return(
        <FullWhithLayout>
            BlogPost
        </FullWhithLayout>
    )
}

const mapStateToPropos = state =>({
    post: state.blog.post
})

export default connect(mapStateToPropos,{
    get_blog
})(BlogPost)