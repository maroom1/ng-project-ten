var dataset=[80,100,56,120,180,30,40,120,160];

var svgWidth=500, svgHeight=300, barPaddding=5;
var barWidth=(svgWidth/dataset.length);

var svg=d3.select('svg')
            .attr("width",svgWidth)
            .attr("height",svgHeight);

var barChart = svg.selectAll("rect") // return null since there are no rectangles
                    .data(dataset) // assign the data and wait for furthur execution
                    .enter() // it will start executing furthur
                    .append("rect") // create reactangles for each data element 
                    .attr("y",function(d){
                        return svgHeight - d; // 300-80 300-100
                    })
                    .attr("height",function(d){
                        return d;
                    })
                    .attr("width", barWidth -barPaddding)
                    .attr("transform",function(d,i){
                        var translate = [barWidth*i,0];
                        console.log("translate for barwidht : "+ barWidth+" and i:"+i+" is "+ translate);
                        return "translate("+ translate +")";
                    });

                    