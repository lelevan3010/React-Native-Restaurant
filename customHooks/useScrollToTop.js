import { FlatList } from 'react-navigation'
import { useRef, useEffect } from 'react'

export default function useScrollToTop(navigation) {
  const listRef = useRef(null)

  function scrollToTop() {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: true })
    }
  }

  useEffect(() => {
    navigation.setParams({ scrollToTop })
  }, [listRef.current])

  return listRef
}
