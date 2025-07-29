import React from 'react'
import { AllCategoriesFilterContainer, EachCategoryContainer, FilterContainer } from '../../styles/components/AllCategoriesFilter'
import { SubHeader } from '../Text/SubHeader'
import { useProductContext } from '../../context/products/useProductContext'
import { Paragraph } from '../Text/Paragraph'
import { ReplaceDashTAndCapitalise } from '../../utils/ReplaceDashToSpace'


interface AllCategoriesFilterProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}


export const AllCategoriesFilter: React.FC <AllCategoriesFilterProps> = ({
  selectedCategories,
  setSelectedCategories
}) => {
  const { categories, fetchCategories } = useProductContext()

  // fetch categories on component mount
  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // handle category selection
  const handleCategorySelection = (category: string) => {
    if (selectedCategories?.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...(selectedCategories || []), category]);
    }
  };



  return (
    <>
      <AllCategoriesFilterContainer>
        <SubHeader text="Categories" />
        <FilterContainer>
          <div className="scrollable">
            <>
              {categories && categories.categories.map((cat) => (
                <EachCategoryContainer key={cat}>
                  <input
                    type="checkbox"
                    name={cat}
                    id={cat}
                    value={cat}
                    checked={selectedCategories?.includes(cat)}
                    onChange={() => handleCategorySelection(cat)}
                  />
                  <Paragraph text={ReplaceDashTAndCapitalise(cat)} className='cat font-bold' />
                </EachCategoryContainer>
              ))}
            </>
          </div>
        </FilterContainer>
      </AllCategoriesFilterContainer>
    </>
  )
}

