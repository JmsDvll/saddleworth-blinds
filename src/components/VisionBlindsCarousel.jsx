import React from 'react'
import ProductCarousel from './ProductCarousel'

const VisionBlindsCarousel = ({ showTitle = true, showDescription = true }) => {
  const visionImages = [
    { src: 'vision-albero-silver-400.jpg', alt: 'Albero Silver Vision Blind', title: 'Albero Silver' },
    { src: 'vision-arezzo-beige-400.jpg', alt: 'Arezzo Beige Vision Blind', title: 'Arezzo Beige' },
    { src: 'vision-arezzo-grey-400.jpg', alt: 'Arezzo Grey Vision Blind', title: 'Arezzo Grey' },
    { src: 'vision-capri-concrete-400.jpg', alt: 'Capri Concrete Vision Blind', title: 'Capri Concrete' },
    { src: 'vision-capri-jasmine-400.jpg', alt: 'Capri Jasmine Vision Blind', title: 'Capri Jasmine' },
    { src: 'vision-capri-pewter-400.jpg', alt: 'Capri Pewter Vision Blind', title: 'Capri Pewter' },
    { src: 'vision-cirro-cashmere-400.jpg', alt: 'Cirro Cashmere Vision Blind', title: 'Cirro Cashmere' },
    { src: 'vision-cirro-pewter-400.jpg', alt: 'Cirro Pewter Vision Blind', title: 'Cirro Pewter' },
    { src: 'vision-cirro-sage-400.jpg', alt: 'Cirro Sage Vision Blind', title: 'Cirro Sage' },
    { src: 'vision-cirro-seagrass-400.jpg', alt: 'Cirro Seagrass Vision Blind', title: 'Cirro Seagrass' },
    { src: 'vision-classica-duckegg-400.jpg', alt: 'Classica Duckegg Vision Blind', title: 'Classica Duckegg' },
    { src: 'vision-classica-hessian-400.jpg', alt: 'Classica Hessian Vision Blind', title: 'Classica Hessian' },
    { src: 'vision-classica-navy-400.jpg', alt: 'Classica Navy Vision Blind', title: 'Classica Navy' },
    { src: 'vision-classica-primrose-400.jpg', alt: 'Classica Primrose Vision Blind', title: 'Classica Primrose' },
    { src: 'vision-ecco-cashmere-400.jpg', alt: 'Ecco Cashmere Vision Blind', title: 'Ecco Cashmere' },
    { src: 'vision-ecco-pewter-400.jpg', alt: 'Ecco Pewter Vision Blind', title: 'Ecco Pewter' },
    { src: 'vision-ecco-stone-400.jpg', alt: 'Ecco Stone Vision Blind', title: 'Ecco Stone' },
    { src: 'vision-ferrara-anthracite-400.jpg', alt: 'Ferrara Anthracite Vision Blind', title: 'Ferrara Anthracite' },
    { src: 'vision-ferrara-gunmetal-400.jpg', alt: 'Ferrara Gunmetal Vision Blind', title: 'Ferrara Gunmetal' },
    { src: 'vision-fiore-blush-400.jpg', alt: 'Fiore Blush Vision Blind', title: 'Fiore Blush' },
    { src: 'vision-fiore-mineral-400.jpg', alt: 'Fiore Mineral Vision Blind', title: 'Fiore Mineral' },
    { src: 'vision-firenze-grey-400.jpg', alt: 'Firenze Grey Vision Blind', title: 'Firenze Grey' },
    { src: 'vision-firenze-natural-400.jpg', alt: 'Firenze Natural Vision Blind', title: 'Firenze Natural' },
    { src: 'vision-firenze-neutral-400.jpg', alt: 'Firenze Neutral Vision Blind', title: 'Firenze Neutral' },
    { src: 'vision-firenze-walnut-400.jpg', alt: 'Firenze Walnut Vision Blind', title: 'Firenze Walnut' },
    { src: 'vision-floreale-rosa-400.jpg', alt: 'Floreale Rosa Vision Blind', title: 'Floreale Rosa' },
    { src: 'vision-linoso-luna-400.jpg', alt: 'Linoso Luna Vision Blind', title: 'Linoso Luna' },
    { src: 'vision-lusso-pebble-400.jpg', alt: 'Lusso Pebble Vision Blind', title: 'Lusso Pebble' },
    { src: 'vision-modina-storm-400.jpg', alt: 'Modina Storm Vision Blind', title: 'Modina Storm' },
    { src: 'vision-nola-grey-400.jpg', alt: 'Nola Grey Vision Blind', title: 'Nola Grey' },
    { src: 'vision-palermo-graphite-400.jpg', alt: 'Palermo Graphite Vision Blind', title: 'Palermo Graphite' },
    { src: 'vision-palermo-silver-400.jpg', alt: 'Palermo Silver Vision Blind', title: 'Palermo Silver' },
    { src: 'vision-rimini-frost-400.jpg', alt: 'Rimini Frost Vision Blind', title: 'Rimini Frost' },
    { src: 'vision-setosa-ivory-400.jpg', alt: 'Setosa Ivory Vision Blind', title: 'Setosa Ivory' },
    { src: 'vision-setosa-pewter-400.jpg', alt: 'Setosa Pewter Vision Blind', title: 'Setosa Pewter' },
    { src: 'vision-trento-beige-400.jpg', alt: 'Trento Beige Vision Blind', title: 'Trento Beige' },
    { src: 'vision-lusso-pebble-400.jpg', alt: 'Lusso Pebble Vision Blind', title: 'Lusso Pebble' },
    { src: 'vision-viale-mauve-400.jpg', alt: 'Viale Mauve Vision Blind', title: 'Viale Mauve' }
  ]

  return (
    <ProductCarousel
      title="Vision Blinds Collection"
      description="Browse through our complete Vision blinds collection to find your perfect style"
      images={visionImages}
      showTitle={showTitle}
      showDescription={showDescription}
      autoPlay={true}
    />
  )
}

export default VisionBlindsCarousel