import React, { useState } from "react";
import Header from "../components/Header";

const FoodList = () => {
  // Khai báo danh sách các món ăn
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Bánh mì",
      image:
        "https://th.bing.com/th/id/OIP.-uMb08nZwECKXpJboKK6ygHaE8?rs=1&pid=ImgDetMain",
      category: "Bánh",
      description: "Món bánh truyền thống của Việt Nam",
      calors: "0.2",
      protein: "0.04",
      fat: "0.25",
      carbohydrate: "3",
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://th.bing.com/th/id/R.45669a6429c027013c3b4171c03ef2d0?rik=tyHbirz4RNDK3Q&pid=ImgRaw&r=0",
      category: "Bánh",
      description: "Món bánh ngọt có nguồn gốc từ Italy",
      calors: "0.2",
      protein: "0.04",
      fat: "0.25",
      carbohydrate: "3",
    },
    {
      id: 3,
      name: "Phở",
      image:
        "https://th.bing.com/th?id=OSK.ac700d3f0bfe0b64ef9b85f8681a15f8&w=540&h=360&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1",
      category: "Mì",
      description: "Món mì nước truyền thống của Việt Nam",
      calors: "0.2",
      protein: "0.04",
      fat: "0.25",
      carbohydrate: "3",
    },
    {
      id: 4,
      name: "Bún chả",
      image:
        "https://th.bing.com/th/id/OIP.XCab2pWF1Ourr3HR6nlxmAHaFe?rs=1&pid=ImgDetMain",
      category: "Mì",
      description: "Món mì xào truyền thống của Việt Nam",
      calors: "0.2",
      protein: "0.04",
      fat: "0.25",
      carbohydrate: "3",
    },
  ])

  // State để lưu trữ thông tin chi tiết của món ăn được chọn
  const [selectedFood, setSelectedFood] = useState(null);

  // Hàm xử lý khi người dùng nhấp vào nút "Xem chi tiết"
  const handleViewDetail = (food) => {
    setSelectedFood(food);
  };

  return (
    <>
      <Header />
      <h2 className="d-flex justify-content-center mt-5 mb-3">
        Danh sách thức ăn
      </h2>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.id}>
                <td>{food.id}</td>
                <td>
                  <img
                    src={food.image}
                    alt={food.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>
                  <button onClick={() => handleViewDetail(food)}>
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Hiển thị thông tin chi tiết */}
        {selectedFood && (
          <div>
            <h2>Food Details</h2>
            <p>
              <strong>Name:</strong> {selectedFood.name}
            </p>
            <p>
              <strong>Type:</strong> {selectedFood.category}
            </p>
            <p>
              <strong>Description:</strong> {selectedFood.description}
            </p>
            <p>
              <strong>Calories:</strong> {selectedFood.calors}
            </p>
            <p>
              <strong>Protein:</strong>
              {selectedFood.protein}
            </p>
            <p>
              <strong>Fat:</strong> {selectedFood.fat}
            </p>
            <p>
              <strong>Carbohydrate:</strong> {selectedFood.carbohydrate}
            </p>
            <button onClick={() => setSelectedFood(null)}>Đóng</button>
          </div>
        )}
      </div>
    </>
  );
};

export default FoodList;
