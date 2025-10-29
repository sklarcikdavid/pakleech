const HeroSection = () => {
    return (
        <section className="h-screen bg-bg justify-center items-center flex m-0" id="HeroSection">
            <div className="HeroImage">
                <img src="https://static.sigosigns.com/media/catalog/product/cache/3c7b6684964f1372900e9fb79dcea243/_/s/_s_i_si-70709-12-m.jpg" className="h-32 mr-4" alt="pakleech" />
            </div>
            <div class="HeroHeader" className="flex flex-col">
                <h1 className="text-text text-8xl font-bold mb-0">pakleech.</h1>
                <p className="text-text text-2xl font-light mt-0 ml-72">klíčník tvým zařízením</p>
            </div>
        </section>
    )
}
export default HeroSection