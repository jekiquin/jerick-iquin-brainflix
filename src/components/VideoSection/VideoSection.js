import './VideoSection.scss';

function VideoSection({ selectedVideo, selectedPoster }) {
    return (
        <section className="content__video-container">
            <video className="content__video" src={selectedVideo} poster={selectedPoster} controls></video>
        </section>
    )
}

VideoSection.defaultProps = {
    selectedVideo: ''
}
export default VideoSection;