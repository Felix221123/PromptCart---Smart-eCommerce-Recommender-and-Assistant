import React from 'react'
import { AllCategoriesFilterContainer, EachCategoryContainer, FilterContainer } from '../../styles/components/AllCategoriesFilter'
import { SubHeader } from '../Text/SubHeader'
import { useProductContext } from '../../context/products/useProductContext'
import { Paragraph } from '../Text/Paragraph'
import { CapitaliseFirstLetter } from '../../utils/CapitaliseFirstLetter'


export const AllCategoriesFilter: React.FC = () => {
  const { categories, fetchCategories } = useProductContext()

  // fetch categories on component mount
  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);




  return (
    <>
      <AllCategoriesFilterContainer>
        <SubHeader text="Categories" />
        <FilterContainer>
          <div className="scrollable">
            <>
              {categories && categories.categories.map((cat) => (
                <EachCategoryContainer key={cat}>
                  <input type="checkbox" name={cat} id={cat} value={cat} />
                  <Paragraph text={CapitaliseFirstLetter(cat)} className='cat font-bold' />
                </EachCategoryContainer>
              ))}
            </>
          </div>
        </FilterContainer>
      </AllCategoriesFilterContainer>
    </>
  )
}

