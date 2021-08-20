import './VideoSection.scss';

function VideoSection({ selectedVideo, selectedPoster }) {
    console.log(selectedVideo)
    return (
        <section className="content__video-container">
            <video className="content__video" src={selectedVideo} poster={selectedPoster}></video>
        </section>
    )
}

VideoSection.defaultProps = {
    selectedVideo: ''
}
export default VideoSection;