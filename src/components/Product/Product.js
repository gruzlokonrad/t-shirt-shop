import styles from './Product.module.scss';
import Button from '../Button/Button';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage';
import OptionSize from './ProductForm/OptionSize';
import OptionColor from './ProductForm/OptionColor';

const Product = ({
  name,
  title,
  basePrice,
  colors,
  sizes,
}) => {

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = useMemo(() =>
    basePrice + sizes[currentSizeIndex].additionalPrice
    , [basePrice, sizes, currentSizeIndex]);
  // const getPrice = () => (
  //   basePrice + sizes[currentSizeIndex].additionalPrice
  // );

  const addProductToCart = event => {
    event.preventDefault();
    console.log('');
    console.log('Summary');
    console.log('=============');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', sizes[currentSizeIndex].name);
    console.log('Color:', colors[currentColorIndex]);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage
          className={styles.image}
          title={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${colors[currentColorIndex]}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
        <form>
          <OptionSize
            classContainer={styles.sizes}
            classHeader={styles.optionLabel}
            classList={styles.choices}
            list={sizes}
            sizeIndex={currentSizeIndex}
            classActive={styles.active}
            action={setCurrentSizeIndex}
          />
          <OptionColor
            classContainer={styles.color}
            classHeader={styles.optionLabel}
            classList={styles.choices}
            list={colors}
            sizeIndex={currentColorIndex}
            classActive={styles.active}
            parseColor={prepareColorClassName}
            action={setCurrentColorIndex}
          />
          <Button
            className={styles.button}
            action={addProductToCart}
          >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;