import FullWhithLayout from "hocs/layouts/FullWhithLayout"
import { connect } from "react-redux"

function Home({
}){
    return(
        <FullWhithLayout>
            home
        </FullWhithLayout>
    )
}

const mapStateToPropos = state =>({

})

export default connect(mapStateToPropos,{

})(Home)