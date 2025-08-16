import React, { useContext } from 'react'
import { translateData } from '../data/translateData'
import { LanguageContext } from '../contexts/LanguageContext'

function useTranslate() {
  const { language } = useContext(LanguageContext)

  const res = (key) => {
    return translateData[key][language]
  }

  return { t: res }
}

export default useTranslate
