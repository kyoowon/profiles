import "./Career.scss"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Career() {
    return (
        <div className="career" id="career">
            <div className="introIcon">
                <a href="https://github.com/kyoowon"><GitHubIcon sx={{ color: "black" }} /></a>
                <a href="https://kyulee.tistory.com/"><RssFeedIcon sx={{ color: "black" }} /></a>
            </div>
        </div>
    )
}
