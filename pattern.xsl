<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h1>
          <xsl:value-of select="testsuites/testsuite/@name"/>
        </h1>
        <ul>
          <li>Tests
            <xsl:value-of select="testsuites/testsuite/@tests"/>
          </li>
          <li>Failures
            <xsl:value-of select="testsuites/testsuite/@failures"/>
          </li>
          <li>Skipped
            <xsl:value-of select="testsuites/testsuite/@skipped"/>
          </li>
        </ul>
        <table border="1">
          <xsl:for-each select="testsuites/testsuite/testcase">
            <tr>
              <td class="title">
                <xsl:value-of select="@name"/>
              </td>
              <td class="rating">
                <xsl:value-of select="@status"/>
              </td>
              <td class="details">
                <div>
                  <xsl:value-of select="failure/@message"/>
                </div>
                <xsl:value-of select="failure"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
