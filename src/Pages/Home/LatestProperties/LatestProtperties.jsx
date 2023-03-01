import Card from "../../../Components/Card/Card"


const LatestProtperties = () => {
    const cardItems= [
        {
            id : 1,
            title:'Real Luxury Family House Villa',
            address:'1421 San Pedro St, Los Angeles, CA 90015',
            price:'1.300.000',
            bedroom:'6',
            bathroom:'2',
            square_meter:'250',
            category:'Maison',
            type:'à vendre',
        },
        {
            id : 2,
            title:'Real Luxury Family House Villa',
            address:'1421 San Pedro St, Los Angeles, CA 90015',
            price:'500.000',
            bedroom:'5',
            bathroom:'1',
            square_meter:'150',
            category:'Appartement',
            type:'à vendre',
        },
        {
            id : 3,
            title:'Real Luxury Family House Villa',
            address:'1421 San Pedro St, Los Angeles, CA 90015',
            price:'65.000',
            bedroom:'4',
            bathroom:'1',
            square_meter:'100',
            category:'Maison',
            type:'à louer',
        },
        {
            id : 4,
            title:'Real Luxury Family House Villa',
            address:'1421 San Pedro St, Los Angeles, CA 90015',
            price:'1.300.000',
            bedroom:'6',
            bathroom:'2',
            square_meter:'250',
            category:'Maison',
            type:'à vendre',
        },
        {
            id : 5,
            title:'Real Luxury Family House Villa',
            address:'1421 San Pedro St, Los Angeles, CA 90015',
            price:'1.300.000',
            bedroom:'6',
            bathroom:'2',
            square_meter:'250',
            category:'Villa',
            type:'à vendre',
        },
        {
            id : 6,
            title:'Real Luxury Family House Villa',
            address:'1421 San Pedro St, Los Angeles, CA 90015',
            price:'65.000',
            bedroom:'4',
            bathroom:'1',
            square_meter:'100',
            category:'Maison',
            type:'à louer',
        }

    ]
    return (
        <section class="home-featured-property my-5">
            <div class="container ">
                <h2 class="text-center fw-semibold">Les dernières propriétés</h2>
                <p class="text-center  fs-4 mt-3">Cherchez vos propriétés pour une vie heureuse.</p>
                <div class="mt-5">
                    <div class="product-item" style={{ position: 'relative', height: '1051.2px' }}>
                        <div class="row">
                            {cardItems.map(elt => <Card elt={elt} key={elt.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestProtperties