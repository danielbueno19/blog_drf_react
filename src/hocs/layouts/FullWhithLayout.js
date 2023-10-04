import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import { connect } from "react-redux"

const FullWithLayout = ({children}) => {
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

const mapStateToPropos = state => ({

})

export default connect(mapStateToPropos, {

})(FullWithLayout)