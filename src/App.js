import './App.css';
import { useState } from 'react';

function App() {
  // 좋아요 개수를 상태로 선언
  const [likes, setLikes] = useState([0, 0, 0, 0, 0]); // 초기값 0으로 초기화

  const titles = ['"As it was"', '"Kaikai Kitan"', '"Girls Never Die"', '"Impossible"', '"첫사랑"'];
  const texts = ['-Harry Styles-', '-Eve-', '-tripleS-', '-Rize-', '-신온유-'];

  const handleLike = (index) => {
    // likes 배열 복사
    const newLikes = [...likes];
    // 해당 인덱스의 좋아요 개수 증가
    newLikes[index] += 1;
    // 변경된 좋아요 상태를 업데이트
    setLikes(newLikes);
  };

  return (
    <div className="App">
      <div className='black-nav'> 
        <h4>SIONBLOG</h4>
      </div>
      
      {titles.map((title, i) => (
        <div key={i} className="list">
          <div className="likes_number">{title}</div>
          <h4>
            <span onClick={() => handleLike(i)}>💗</span> {likes[i]}
          </h4>
          <p>{texts[i]}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

//  Q:곡 제목과 좋아요 수에 속성을 다르게 주고 싶은데 어떻게 해야할까?
//  Q:곡 제목과 가수명 사이 줄 간격을 띄우고 싶은데 어떻게 할지

