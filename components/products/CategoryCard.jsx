import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';

const CategoryCard = ({ category, onClick, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div 
        onClick={onClick}
        className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group overflow-hidden"
      >
        <div className="flex items-center p-6">
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mr-6">
            <Image
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-montserrat font-semibold text-secondary-dark group-hover:text-primary transition-colors duration-300">
                {category.name}
              </h3>
            {/* {category.featured && (
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            )} */}
            </div>
            
            <p className="text-secondary-light mb-4 line-clamp-2">
              {category.description}
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {/* <div>
              <span className="text-secondary-light">Products:</span>
              <span className="text-secondary font-medium ml-1">{category.productCount}</span>
            </div>
            <div>
              <span className="text-secondary-light">Availability:</span>
              <span className="text-secondary font-medium ml-1">{category.seasonalAvailability}</span>
            </div>
            <div>
              <span className="text-secondary-light">Min Order:</span>
              <span className="text-secondary font-medium ml-1">{category.typicalOrderVolume.split(' - ')[0]}</span>
            </div> */}
              <div className="flex items-center">
                <Icon name="ArrowRight" size={16} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-primary font-medium ml-1">Explore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group overflow-hidden hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
      {/* {category.featured && (
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
            Featured
          </span>
        </div>
      )} */}
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-montserrat font-semibold text-white mb-1">
            {category.name}
          </h3>
        {/* <p className="text-white/90 text-sm">
          {category.productCount} products available
        </p> */}
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-secondary-light mb-4 line-clamp-2">
          {category.description}
        </p>
        
      {/* <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-secondary-light">Seasonal Availability:</span>
          <span className="text-secondary font-medium">{category.seasonalAvailability}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-secondary-light">Typical Order Volume:</span>
          <span className="text-secondary font-medium">{category.typicalOrderVolume}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-secondary-light">Origin Regions:</span>
          <span className="text-secondary font-medium">{category.originRegions.length} regions</span>
        </div>
      </div> */}
{/*       
      <div className="mb-6">
        <div className="text-sm text-secondary-light mb-2">Quality Certifications:</div>
        <div className="flex flex-wrap gap-2">
          {category.certifications.slice(0, 3).map((cert, index) => (
            <span key={index} className="bg-accent text-secondary text-xs px-2 py-1 rounded-full">
              {cert}
            </span>
          ))}
          {category.certifications.length > 3 && (
            <span className="text-xs text-secondary-light">
              +{category.certifications.length - 3} more
            </span>
          )}
        </div>
      </div> */}
        
      <div className="flex items-center justify-between">
      {/* <div className="flex items-center text-primary">
        <Icon name="MapPin" size={16} className="mr-1" />
        <span className="text-sm font-medium">{category.originRegions[0]}</span>
      </div> */}
          
          <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
            <span className="text-sm font-medium mr-1">Explore Category</span>
            <Icon name="ArrowRight" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;