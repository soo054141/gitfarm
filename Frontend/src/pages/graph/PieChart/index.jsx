import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";
import LoadingModal from "@/components/LoadingModal";
import githubLangColors from "./github-lang-colors.json";
import * as PieCharts from "./style";

function PieChartComponent({ reposLanguage, loading }) {
  const languageCountObj = {};

  reposLanguage.forEach((it) => {
    if (Object.prototype.hasOwnProperty.call(languageCountObj, it.language)) {
      languageCountObj[it.language] += 1;
    } else {
      languageCountObj[it.language] = 1;
    }
  });

  const sortedLanguageCountObj = Object.fromEntries(
    Object.entries(languageCountObj).sort(([, a], [, b]) => b - a),
  );

  let denominator = 0;
  Object.entries(sortedLanguageCountObj).forEach((languageArray, idx) => {
    if (idx > 4) return;
    denominator += languageArray[1];
  });

  const languageRatioArray = [];
  Object.entries(sortedLanguageCountObj).forEach((languageArray, idx) => {
    if (idx > 4) return;
    languageRatioArray.push({
      name: languageArray[0],
      value: +((languageArray[1] / denominator) * 100).toFixed(2),
    });
  });

  const langColor = githubLangColors;
  const COLORS = languageRatioArray.map((it) => {
    const langName = it.name;
    return langColor[langName];
  });

  return (
    <PieCharts.Container>
      {loading ? (
        <LoadingModal />
      ) : (
        <PieCharts.PieChartContainer>
          {reposLanguage.length ? (
            <>
              <PieCharts.Wrapper>
                <PieCharts.Heading>
                  <PieCharts.Title>사용 언어 비율</PieCharts.Title>
                  <PieCharts.Description>
                    전체 레포 기준 (상위 5개)
                  </PieCharts.Description>
                </PieCharts.Heading>
                <PieCharts.RatioWrapper>
                  {languageRatioArray &&
                    languageRatioArray.map((it, idx) => (
                      <PieCharts.LangColorBoxWrapper
                        key={`${it.name}-${it.value}`}
                      >
                        <PieCharts.LangColorBox idx={COLORS[idx]} />
                        <div>
                          <PieCharts.LangText>{it.value}%</PieCharts.LangText>
                          <PieCharts.LangText>{it.name}</PieCharts.LangText>
                        </div>
                      </PieCharts.LangColorBoxWrapper>
                    ))}
                </PieCharts.RatioWrapper>
              </PieCharts.Wrapper>

              <PieCharts.PieWrapper>
                {languageRatioArray && (
                  <PieChart width={200} height={200}>
                    <Pie
                      data={languageRatioArray}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      fill="#8884d8"
                      dataKey="value"
                      isAnimationActive={false}
                    >
                      {languageRatioArray.map((it, index) => (
                        <Cell
                          key={`cell-${it.name}-${it.value}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                )}
              </PieCharts.PieWrapper>
            </>
          ) : (
            <PieCharts.NoData>데이터가 없습니다.</PieCharts.NoData>
          )}
        </PieCharts.PieChartContainer>
      )}
    </PieCharts.Container>
  );
}

PieChartComponent.propTypes = {
  reposLanguage: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
    }),
  ),
  loading: PropTypes.bool.isRequired,
};

PieChartComponent.defaultProps = {
  reposLanguage: [],
};

export default React.memo(PieChartComponent);
