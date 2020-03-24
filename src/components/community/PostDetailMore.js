import React from 'react'
import { AiOutlineEllipsis, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Swal from 'sweetalert2'

export default function PostDetailMore(props) {
  console.log('props', props)
  const deletePost = () => {
    Swal.fire({
      title: '确定删除留言吗？',
      text: '你将无法恢复它！',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#79cee2',
      cancelButtonColor: '#F9A451',
      confirmButtonText: '确定删除',
      cancelButtonText: '取消',
    }).then(result => {
      if (result) {
        return fetch('http://localhost:5555/items/delpost', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(props),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }).then(result => {
          Swal.fire({
            title: '刪除成功!',
            text: '你已經成功刪除此貼文',
            icon: 'success',
            confirmButtonColor: '#79cee2',
          }).then(r => {
            window.location.href = `/Communityprofile/${props.memberID}`
          })
        })
      }
    })
  }
  return (
    <>
      <div className="d-flex justify-content-end C-morebutton position-relative">
        <AiOutlineEllipsis
          style={{ fontSize: '30px', marginTop: '8px', display: 'block' }}
        />
        <ul className="C-morebuttonList">
          <li style={{ fontSize: '14px' }}>
            <span style={{ padding: '5px 0' }}>
              <AiFillEdit style={{ fontSize: '18px' }} />
              編輯貼文
            </span>
          </li>
          <li style={{ fontSize: '14px' }}>
            <span
              style={{ padding: '5px 0' }}
              onClick={() => {
                deletePost()
              }}
            >
              <AiFillDelete style={{ fontSize: '16px' }} />
              刪除貼文
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
