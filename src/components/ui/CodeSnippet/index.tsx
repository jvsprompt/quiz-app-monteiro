import Prism from 'prismjs'
// import 'prismjs/themes/prism-solarizedlight.css'

import React, { useEffect, useRef } from 'react'

interface CodeSnippetProps {
  code: string
  language: string
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (codeRef.current) {
      // Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <pre className={`language-${language}`} style={{ fontSize: '13px' }}>
      <code className={`language-${language}`} ref={codeRef} style={{ fontSize: '13px' }}>
        {code}
      </code>
    </pre>
  )
}

export default CodeSnippet