import BlogList from "components/blog/BlogList"
import Header from "components/blog/Header"
import FullWhithLayout from "hocs/layouts/FullWhithLayout"
import { connect } from "react-redux"

function Blog({
    
}){
    return(
        <FullWhithLayout>
            <Header/>
            <BlogList/>
        </FullWhithLayout>
    )
}

const mapStateToPropos = state =>({
    
})

export default connect(mapStateToPropos,{
    
})(Blog)